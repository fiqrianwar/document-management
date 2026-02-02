# Documents Management System

## Overview

This project is a simple Documents Management System that allows users to
create folders, upload document, and navigate nested folders.
The system supports unlimited folder nesting and unified file/folder listing.

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- SWR for data fetching and caching
- Axios for HTTP client abstraction
- Tailwind CSS

### Backend

- Node.js
- TypeScript
- Express.js
- TypeORM
- MySQL 8

## Features

- View documents and folders in a unified explorer
- Create folders and documents (metadata only)
- Unlimited nested folder structure
- Search documents and folders by name

## Architecture Overview

The application follows a client–server architecture with a clear separation
of concerns between presentation, business logic, and data persistence.

### Frontend

- Built with Next.js (App Router) and TypeScript
- Responsible for UI rendering, routing, and user interactions
- Tailwind for handling style
- uses Axios as a centralized HTTP client, combined with SWR for cache management and revalidation.
- Folder navigation is handled via dynamic routes (`/file-explorer/[folderPath]`)

### Backend

- Built with Node.js, TypeScript, and Express.js
- Exposes RESTful APIs to manage folders and document metadata
- Provides a unified explorer endpoint that returns both folders and documents
  in a single, ordered response

### Database

- Uses MySQL 8 as the relational database
- Folder hierarchy is modeled using a self-referencing `parent_id` column,
  allowing unlimited nested folders
- Documents reference folders via a foreign key and can exist at the root level

This design keeps the frontend stateless with respect to folder hierarchy
and delegates traversal logic to the backend and database layer, resulting
in a scalable and maintainable architecture.

## Database Design

### folders

- id (UUID)
- name
- parent_id (nullable, self-referencing)
- item_type_flag
- created_at
- created_by

### documents

- id (UUID)
- name
- folder_id (nullable)
- document_type
- created_by
- created_at
- item_type_flag

## API Endpoints

### File Explorer

- GET /fileExplorer
- GET /fileExplorer?parentId={folderId}
- GET /fileExplorer?parentId={folderId}&search={keyword}

### Folder

- POST /folders

### Document

- POST /documents

## Frontend Structure

src/
├── app/
│ └── file-explorer/[folderPath]/
├── components/
│ └── fileExplorer/
├── services/
│ └── fileExplorer/
├── lib/
│ └── fetcher.ts

## Setup & Run Locally

## Environment Variables

## Key Design Decisions

## Assumptions & Limitations

## Possible Improvements
