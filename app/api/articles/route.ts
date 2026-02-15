import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
        return NextResponse.json({ success: true, data: [] });
    }
    await connectToDatabase();
    const articles = await Article.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: articles });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.MONGODB_URI) {
        return NextResponse.json({ success: false, message: 'Database not configured' }, { status: 500 });
    }

    // Auth Check
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
    }

    await connectToDatabase();
    const body = await req.json();
    const article = await Article.create(body);
    return NextResponse.json({ success: true, data: article }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
