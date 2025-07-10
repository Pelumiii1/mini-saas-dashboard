import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'active' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', status: 'pending' },
    { id: 5, name: 'Eve Adams', email: 'eve@example.com', status: 'active' },
  ];
  return NextResponse.json(users);
}
