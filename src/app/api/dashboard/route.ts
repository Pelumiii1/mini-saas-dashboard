import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    metrics: {
      monthlyUsers: 12345,
      revenue: 54321,
      churn: 5,
    },
    chartData: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 600 },
      { name: 'Apr', value: 800 },
      { name: 'May', value: 500 },
      { name: 'Jun', value: 700 },
    ],
  });
}
