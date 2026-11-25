import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    const requiredSecret = process.env.SEED_SECRET;
    if (requiredSecret) {
        const url = new URL(req.url);
        const headerSecret = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
        if (headerSecret !== requiredSecret && url.searchParams.get('secret') !== requiredSecret) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    await dbConnect();

    try {
        const [existingGuru, existingSiswa] = await Promise.all([
            User.findOne({ username: 'guru' }),
            User.findOne({ username: 'siswa' }),
        ]);

        const toCreate: any[] = [];
        if (!existingGuru) {
            const hashedPassword = await bcrypt.hash('password', 10);
            toCreate.push({
                id: 'guru-1',
                username: 'guru',
                password: hashedPassword,
                role: 'GURU',
                fullName: 'Budi Guru',
                email: 'guru@sekolah.id',
                schoolName: 'SMA Negeri 1',
                photoUrl: 'https://i.pravatar.cc/150?u=guru'
            });
        }

        if (!existingSiswa) {
            const hashedPassword = await bcrypt.hash('password', 10);
            toCreate.push({
                id: 'siswa-1',
                username: 'siswa',
                password: hashedPassword,
                role: 'SISWA',
                fullName: 'Ani Siswa',
                email: 'siswa@sekolah.id',
                kelas: 'XII-A',
                schoolName: 'SMA Negeri 1',
                photoUrl: 'https://i.pravatar.cc/150?u=siswa',
                levels: {
                    level1: JSON.stringify({
                        "Siapakah_presiden_pertama_Indonesia?": "Soekarno",
                        "Apa_warna_bendera_Indonesia?": "Merah Putih",
                        "status": "completed",
                        "stars": 3
                    })
                }
            });
        }

        if (toCreate.length > 0) {
            await User.createMany(toCreate);
        }

        return NextResponse.json({ message: 'Database seeded successfully. You can now login.' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Seeding failed' }, { status: 500 });
    }
}
