import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

// GET /api/projects/[id]
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    
    const id = Number((await params).id);

    // check if a valid id is provided, otherwise return an error
    if (Number.isNaN(id)) {
        return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    // look up the item by id in your data source
    const project = getProjectById(id);

    // return NextResponse.json({ error: 'Not found' }, { status: 404 }) if missing
    if (!project) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}