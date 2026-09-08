import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

// GET /api/projects/?type=opensource or /api/projects/?type=school
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

    // check if a valid type is provided, otherwise return an error
  if (type && type !== 'opensource' && type !== 'school') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }
    
    //Get all projects or filter by type if provided
    const projects = getProjects(type);


  // look up the item by type in your data source
  // return NextResponse.json({ error: 'Not found' }, { status: 404 }) if missing
  return NextResponse.json(projects);
}