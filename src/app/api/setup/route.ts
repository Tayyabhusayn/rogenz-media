import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
  await connectToDatabase();
  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      return NextResponse.json({ message: 'Admin already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt); // Default password

    await User.create({
      email: 'admin@rogenz.com',
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'Admin created. Email: admin@rogenz.com, Pass: admin123' });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
