# AI chat box
Build a complete full-stack AI-powered Employee Support Chatbot for a Public Sector Organization.

The application should be production-ready and include frontend, backend, AI integration, authentication, document processing, scalability, and deployment.

## Project Requirements

Create a web application called "Enterprise Employee Assistant".

The chatbot must answer employee queries related to:

* HR Policies
* Leave Management
* Employee Benefits
* IT Support
* Password Reset
* Company Events
* Organizational Announcements
* General FAQs

Use Retrieval-Augmented Generation (RAG) so the chatbot answers from uploaded documents instead of hallucinating.

## AI Requirements

Use:

* Gemini API
* LangChain
* ChromaDB Vector Database
* Embedding Model for Semantic Search

Implement:

1. Document Upload
2. PDF Processing
3. DOCX Processing
4. Text Chunking
5. Embedding Generation
6. Vector Storage
7. Semantic Retrieval
8. Context-Aware Answer Generation

## Document Intelligence Module

Allow users to upload PDF, DOCX, and TXT files.

Provide:

### Document Summarization

* Executive Summary
* Detailed Summary
* Bullet Point Summary

### Information Extraction

Extract:

* Keywords
* Important Dates
* Contact Information
* Policy Numbers
* Action Items
* Named Entities

### Document Q&A

Users can ask questions about uploaded documents.

Examples:

* Summarize this document.
* What is the leave policy mentioned?
* Extract all deadlines.
* Give key points.

## Authentication

Implement Email-based Two Factor Authentication (2FA).

Flow:

1. User enters email.
2. System sends OTP.
3. User verifies OTP.
4. Access granted.

Requirements:

* OTP expiry 5 minutes
* Secure session management
* JWT authentication
* Password hashing
* Rate limiting

## Content Moderation

Create a bad-language filter.

Requirements:

* Maintain prohibited words dictionary.
* Detect abusive language.
* Block inappropriate messages.
* Return a warning message.

## Performance Requirements

The system must support at least 5 simultaneous users.

Response time:

* Chat response under 5 seconds.
* OTP verification under 2 seconds.
* Document retrieval under 5 seconds.

Optimize:

* Async API calls
* Efficient vector search
* Caching

## Technology Stack

Frontend:

* React
* Tailwind CSS
* Material UI

Backend:

* Python FastAPI

AI Layer:

* Gemini API
* LangChain

Database:

* PostgreSQL

Vector Database:

* ChromaDB

Authentication:

* Firebase Authentication
* Email OTP

Deployment:

* Docker
* Google Cloud Run

## UI Pages

Create:

1. Login Page
2. OTP Verification Page
3. Dashboard
4. Chat Interface
5. Document Upload Page
6. Chat History Page
7. Admin Dashboard

UI Requirements:

* Modern design
* Mobile responsive
* Dark mode
* Typing indicator
* Upload progress indicator

## Backend APIs

Create:

POST /login

POST /verify-otp

POST /chat

POST /upload-document

POST /summarize

POST /extract-keywords

GET /chat-history

GET /health

## Database Design

Create tables for:

Users
Documents
Chat History
OTP Verification
Feedback

Generate complete SQL schema.

## Architecture

Create:

* High-Level Architecture Diagram
* RAG Workflow Diagram
* Database ER Diagram
* Deployment Diagram

## Source Code

Generate complete project structure with:

Frontend source code

Backend source code

LangChain integration

Gemini integration

ChromaDB integration

Email OTP implementation

Document processing module

Bad-word filtering module

Docker configuration

Environment variables

README.md

## Additional Features

Add:

* Conversation memory
* User feedback system
* Chat export to PDF
* Admin analytics dashboard
* User activity logs

## Hackathon Deliverables

Also generate:

1. PPT content (10 slides)
2. Project abstract
3. System architecture explanation
4. Database explanation
5. 3-minute demo video script
6. Future enhancements
7. Testing strategy

Generate the entire application step-by-step and provide all code files with folder structure and implementation details.
## output
<img width="1918" height="962" alt="image" src="https://github.com/user-attachments/assets/ef95131f-3052-4d05-82d0-0210c0e49ece" />
<img width="1917" height="966" alt="image" src="https://github.com/user-attachments/assets/73325dff-47c1-4ad8-8036-8b1c0ccc5192" />
<img width="1918" height="962" alt="image" src="https://github.com/user-attachments/assets/a48608b0-bba0-454e-b544-1ac58606a571" />
<img width="1918" height="963" alt="image" src="https://github.com/user-attachments/assets/d8571df7-1d25-4076-a0da-79a3c51f23dc" />

