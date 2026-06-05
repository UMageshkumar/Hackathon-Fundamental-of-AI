import React, { useState } from 'react';
import { 
  FileText, 
  Presentation, 
  Database, 
  Tv2, 
  Wrench, 
  Rocket, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Network
} from 'lucide-react';

export default function HackathonKit() {
  const [activeTab, setActiveTab] = useState<'slides' | 'abstract' | 'architecture' | 'video' | 'testing'>('slides');
  const [currentSlide, setCurrentSlide] = useState(0);

  // 10 Pitch slides
  const slides = [
    {
      title: "Slide 1: Title & Executive Vision",
      subtitle: "Enterprise Employee Assistant (EEA)",
      bullets: [
        "Project: Secure, RAG-grounded Employee Support Hub built for modern Public Sector Organizations.",
        "Vision: Bridge the administrative support gap with modern AI without data leaks or hallucinations.",
        "Value: Instant, 24/7 policy and IT support responses directly derived from authenticated organization directories."
      ],
      tag: "Vision Page"
    },
    {
      title: "Slide 2: The Public Sector Service Deficit",
      subtitle: "Current Operational Friction Points",
      bullets: [
        "Siloed Knowledge: General guidelines, vision standards, and IT protocols scattered throughout disparate PDFs.",
        "MFA Security Void: Lack of robust identity safeguards for administrative portals.",
        "Manual Escalation: Simple issues (e.g., password resets) overload helpdesks, causing multi-hour operational backlogs."
      ],
      tag: "Problem Space"
    },
    {
      title: "Slide 3: Our AI-Powered RAG Solution",
      subtitle: "The Enterprise Employee Assistant Architecture",
      bullets: [
        "Intelligent RAG Workflow: Zero parameter hallucinations. All answers are grounded firmly to authorized database documents.",
        "Multi-Format Intake: Ingest, clean, index, and analyze PDF, DOCX, and TXT files instantly.",
        "Semantic Vector Retrievals: Overlaps and keyword indices ensure context blocks are routed dynamically into Gemini 3.5 Flash."
      ],
      tag: "Solution Strategy"
    },
    {
      title: "Slide 4: Advanced Document Intelligence",
      subtitle: "Deep NLP Policy Processing",
      bullets: [
        "Executive & Comprehensive Summaries: Distill 50-page policy manuals into immediate 1-paragraph briefs.",
        "Automated Entity Extraction: Deep-scan files for policy numbers, dates, action points, and contact guidelines.",
        "Instant Grounded QA: Employees query documents directly from a responsive chat canvas."
      ],
      tag: "Features Showcase"
    },
    {
      title: "Slide 5: Bulletproof Identity & Safety Gate",
      subtitle: "Enterprise Compliance & Secure Infrastructure",
      bullets: [
        "Email Multiplex 2FA: High-speed numerical OTP generation with transient 5-minute memory expiry.",
        "System Content Moderation: Custom bad-word filter scans user inputs prior to LLM submission.",
        "Comprehensive Audit Trails: Immutable logging of auth triggers, uploads, queries, and moderation flags."
      ],
      tag: "Trust & Security"
    },
    {
      title: "Slide 6: Dynamic Administrative Insights",
      subtitle: "Analytics-Driven Infrastructure Steering",
      bullets: [
        "Operational Metrics Dashboard: Monitor total users, document logs, queries, and moderation block histories.",
        "Query Topic Frequency Charts: Intelligently categorize what employees are asking in real-time.",
        "Double-Loop User Feedback: Up/down voting with detailed comment archives ensures rapid support optimization."
      ],
      tag: "Admin Analytics"
    },
    {
      title: "Slide 7: Relational Database Schema Design",
      subtitle: "PostgreSQL & Vector Store Structural Schema",
      bullets: [
        "Users Table: Stores email, role constraints, and user metadata for access verification.",
        "Documents Table: Keeps file metadata, plain text contents, structured summary caches, and entity arrays.",
        "Chat Logs & Feedback Database: Maintained for auditing, compliance verification, and model tuning."
      ],
      tag: "Database System"
    },
    {
      title: "Slide 8: Robust Tech Stack Integration",
      subtitle: "Engineered for Performance and Portability",
      bullets: [
        "Frontend: Single-Page React with responsive, high-contrast Tailwind styling.",
        "Backend APIs: High-speed, secure Express middleware running on node containers (Port 3000).",
        "AI Foundations: Google GenAI Client (@google/genai) routing Gemini 3.5 Flash and keyword semantics."
      ],
      tag: "Stack Anatomy"
    },
    {
      title: "Slide 9: Scalability & Deployment Pathways",
      subtitle: "Production Deployment on Google Cloud",
      bullets: [
        "Container State: Micro-bundled container using custom Docker processes.",
        "Scale-To-Zero Cloud Run: Deployed on Google Cloud Run for rapid latency responses (<2s response times).",
        "Firebase Auth Expansion: Seamless upgrade mapping directly into permanent directory stores."
      ],
      tag: "Production Deployment"
    },
    {
      title: "Slide 10: Future Roadmap & Milestones",
      subtitle: "Where We Lead EEA Next",
      bullets: [
        "Biometric 2FA Protocols: Support WebAuthn Passkeys directly for desktop logins.",
        "Speech-to-Speech Portal: Multi-speaker conversational TTS powered by the Gemini Live API.",
        "Automated System Actions: Support direct password resets via secure integration with centralized AD/Azure portals."
      ],
      tag: "System Horizon"
    }
  ];

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden min-h-[500px]">
      <div className="bg-slate-900 px-6 py-4 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Presentation className="h-5 w-5 text-teal-400" />
            Hackathon & Pitch Deliverables Hub
          </h2>
          <p className="text-xs text-slate-400 font-mono">PROJECT ACCOMPANYMENT & COGNITIVE ARTIFACTS</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button 
            onClick={() => setActiveTab('slides')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${activeTab === 'slides' ? 'bg-teal-500 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Slides (1-10)
          </button>
          <button 
            onClick={() => setActiveTab('abstract')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${activeTab === 'abstract' ? 'bg-teal-500 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Abstract
          </button>
          <button 
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${activeTab === 'architecture' ? 'bg-teal-500 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Architecture
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${activeTab === 'video' ? 'bg-teal-500 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Demo Script
          </button>
          <button 
            onClick={() => setActiveTab('testing')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${activeTab === 'testing' ? 'bg-teal-500 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Testing Plan
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* 1. SLIDES TAB */}
        {activeTab === 'slides' && (
          <div className="space-y-6">
            <div className="bg-slate-950 text-slate-100 rounded-xl p-8 border border-slate-800 relative shadow-inner">
              <span className="absolute top-4 right-4 bg-teal-500/20 text-teal-400 text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-teal-500/30">
                {slides[currentSlide].tag}
              </span>
              
              <div className="space-y-4">
                <span className="text-teal-400 font-mono text-xs uppercase tracking-wider block">Enterprise Pitch Desk</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{slides[currentSlide].title}</h3>
                <h4 className="text-md font-medium text-slate-300 border-b border-slate-800 pb-3">{slides[currentSlide].subtitle}</h4>
                
                <ul className="space-y-3.5 pt-2 text-slate-300 text-sm md:text-base leading-relaxed">
                  {slides[currentSlide].bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-teal-400 mt-1.5 font-bold text-xs">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar inside Slide */}
              <div className="mt-8 pt-4 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>SLIDE {currentSlide + 1} OF {slides.length}</span>
                <div className="flex gap-1 h-1.5 bg-slate-900 rounded-full overflow-hidden w-40">
                  {slides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-full flex-1 transition-colors ${i <= currentSlide ? 'bg-teal-400' : 'bg-slate-800'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button 
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Previous Slide
              </button>
              
              <div className="text-xs text-slate-500 font-mono font-medium">
                Tip: Use these slides to review organizational goals.
              </div>

              <button 
                onClick={handleNextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Next Slide <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* 2. ABSTRACT TAB */}
        {activeTab === 'abstract' && (
          <div className="space-y-4 max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="h-5 w-5 text-slate-700" />
              Project Abstract Summary
            </h3>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-slate-700 text-sm leading-relaxed space-y-4">
              <p>
                The <strong>Enterprise Employee Assistant (EEA)</strong> is an optimized, high-fidelity AI-driven support portal engineered specifically for public sector compliance, information density, and data security mandates. Public sector employees routinely suffer from cognitive overload when navigating sprawling policy manuals, complex wellness regulations, and rigid IT protocols. These bottlenecks slow down employee productivity and overburden internal administrative desks.
              </p>
              <p>
                EEA solves this operational challenge using an advanced <strong>Retrieval-Augmented Generation (RAG)</strong> architecture. By grounding the AI generation layer exclusively to authorized organizational policies, we eliminate hallucinated facts and provide 100% compliant responses. 
              </p>
              <p>
                The platform features a <strong>Document Intelligence Module</strong> capable of digesting PDF, DOCX, and TXT files. Upon ingestion, files are parsed and compiled into executive summaries, policy dead-line catalogs, specific contact lists, and named action item indices using the <strong>Gemini 3.5 Flash Model</strong>. 
              </p>
              <p>
                Security and safety form the product's foundation. A secure, transient <strong>Two-Factor Email OTP System</strong> guards entry with strict 5-minute passcode expirations. An input <strong>Content Moderation Filter</strong> acts as a proactive gate, blocking inquiries violating the employee code-of-conduct before they reach internal AI models. Full administrative auditing, feedback analytics, and PDF transcript export tools complete the product, ensuring a robust, compliant solution ready for modern server platforms.
              </p>
            </div>
          </div>
        )}

        {/* 3. SYSTEM ARCHITECTURE & DATABASE EXPLANATION */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Network className="h-5 w-5 text-teal-600" />
              System Architecture & Workflows
            </h3>

            {/* Architecture Diagrams Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Visual RAG Workflow */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">1. Human-In-The-Loop RAG Workflow</h4>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-[11px] text-teal-400 overflow-x-auto leading-relaxed">
                  {`[Employee Input Query]
        │
        ▼ (Security Check)
 [Content Moderation Filter] ──❌ Flares Abusive Vocabulary
        │          (Warning Block Issued to User)
        ▼ (Approved Message)
[Semantic Keyword / Overlap Index]
        │
        ▼ (Extract Context)
[Document Memory (PDF/DOCX/TXT Chunks)] ──► Matches Top 3 Context Blocks
        │
        ▼ (Grounded Groundings)
  [Gemini 3.5 Flash LLM Core] ──► Custom low-temp synthesis (0.3)
        │
        ▼ (Secure API Delivery)
[Employee Chat Screen Response] (With Source Citations & Up/Down Votes)`}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Grounds the generative LLM process inside strict, verified policy boundaries.
                </p>
              </div>

              {/* Box 2: Database Schema (ERD) */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database className="h-4 w-4" /> 2. Relational Schema Blueprint (PostgreSQL)
                </h4>
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
                  {`-- Users Table
CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(50) CHECK (role IN ('admin', 'employee'))
);

-- Documents Table
CREATE TABLE documents (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255),
  type VARCHAR(10) CHECK (type IN ('pdf', 'docx', 'txt')),
  size INT,
  char_count INT,
  plain_text TEXT,
  summary JSONB, -- { executive, detailed, bulletPoints }
  metadata JSONB, -- { importantDates, contactInfo, etc }
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chat Log & Audits
CREATE TABLE chat_messages (
  id VARCHAR(100) PRIMARY KEY,
  session_id VARCHAR(100),
  sender VARCHAR(20) CHECK (sender IN ('user', 'bot')),
  message_text TEXT,
  timestamp TIMESTAMP,
  flagged BOOLEAN DEFAULT FALSE,
  metadata JSONB -- storing cited doc sources and categories
);`}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Strict foreign key structures map session ID records to audits and user feedback.
                </p>
              </div>

            </div>

            {/* Platform Deployment Flow */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">3. Production Deployment Topography</h4>
              <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-slate-300 flex flex-col md:flex-row justify-between gap-4 items-center">
                <div className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-center w-full md:w-auto">
                  <p className="font-bold text-white">Docker Container</p>
                  <p className="text-[10px] text-slate-500">Alpine-Node Base</p>
                </div>
                <span className="text-teal-400">══▶</span>
                <div className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-center w-full md:w-auto">
                  <p className="font-bold text-white">Cloud Build</p>
                  <p className="text-[10px] text-slate-500">Google Registry</p>
                </div>
                <span className="text-teal-400">══▶</span>
                <div className="px-3 py-1.5 bg-teal-900/20 border border-teal-500/30 rounded text-teal-400 text-center w-full md:w-auto">
                  <p className="font-bold text-white">Cloud Run</p>
                  <p className="text-[10px] text-teal-400/70">Port 3000 Ingress</p>
                </div>
                <span className="text-teal-400">══▶</span>
                <div className="px-3 py-1.5 bg-indigo-900/20 border border-indigo-500/30 rounded text-indigo-400 text-center w-full md:w-auto">
                  <p className="font-bold text-white">Security IAM Caps</p>
                  <p className="text-[10px] text-indigo-400/70">HTTPS & VPC Gates</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. DEMO SCREENPLAY TAB */}
        {activeTab === 'video' && (
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Tv2 className="h-5 w-5 text-indigo-600" />
              Interactive Demo Pitch Video Screenplay (3-Minute Script)
            </h3>
            
            <div className="border border-slate-200 bg-amber-50/20 rounded-xl p-5 space-y-4 text-sm scroll-smooth overflow-y-auto max-h-[450px]">
              
              {/* Scene 1 */}
              <div className="border-l-4 border-teal-500 pl-3">
                <span className="text-xs font-mono text-teal-600 font-bold">SCENE 1: INTRODUCTION (0:00 - 0:35)</span>
                <p className="text-slate-800 font-medium mt-1">"Empowering the Workforce through Automated Policy Intelligence"</p>
                <p className="text-slate-500 text-xs italic mt-0.5">Visual: screen records of the premium Dashboard with Inter typography. Hovering on active pre-seeded files.</p>
                <div className="text-slate-600 mt-2">
                  <strong>Speaker:</strong> "Hello, my name is the team lead for EEA. In today's dense public sector environment, administrative bottlenecks cost organizations thousands of lost hours each year. Simple queries about bereavement policies, medical leaves, or locked accounts delay actions. Today, we introduce the <strong>Enterprise Employee Assistant</strong>—the single-screen solution for instant, secured Employee Support."
                </div>
              </div>

              {/* Scene 2 */}
              <div className="border-l-4 border-teal-500 pl-3">
                <span className="text-xs font-mono text-teal-600 font-bold">SCENE 2: AUTHENTICATION & SECURITY (0:35 - 1:10)</span>
                <p className="text-slate-800 font-medium mt-1">"High-Trust Entry & Language Guardianship"</p>
                <p className="text-slate-500 text-xs italic mt-0.5">Visual: User triggers OTP input on the secure verification panel. The verification matches and navigates inside smoothly.</p>
                <div className="text-slate-600 mt-2">
                  <strong>Speaker:</strong> "Security is paramount. The portal begins with secure twofold verification. User enters an email, receives an OTP code expiring in 5 minutes, and gains instantaneous entry. To protect workplace norms, EEA features a Content Moderation filter. It scans and rejects requests violating the employee code-of-conduct right at the boundary."
                </div>
              </div>

              {/* Scene 3 */}
              <div className="border-l-4 border-teal-500 pl-3">
                <span className="text-xs font-mono text-teal-600 font-bold">SCENE 3: RETRIEVAL-AUGMENTED CONVERSATIONS (1:10 - 2:15)</span>
                <p className="text-slate-800 font-medium mt-1">"Intelligent RAG & Source Citations"</p>
                <p className="text-slate-500 text-xs italic mt-0.5">Visual: Active chat stream. Formulates a clean Markdown response with bullet points and links back to 'HR-Leave-Policy-2026.pdf'.</p>
                <div className="text-slate-600 mt-2">
                  <strong>Speaker:</strong> "Watch as I type 'Whom should I contact if SSPR password resets fail?' The system indexes document memories instantly, fetches relevant paragraphs, and streams a factual answer grounded by the IT standards document. No hallucinations. The assistant includes specific document citations, active office telephone numbers, and interactive feedback icons in real-time."
                </div>
              </div>

              {/* Scene 4 */}
              <div className="border-l-4 border-teal-500 pl-3">
                <span className="text-xs font-mono text-teal-600 font-bold">SCENE 4: DOCUMENT INTELLIGENCE & ANALYTICS (2:15 - 3:00)</span>
                <p className="text-slate-800 font-medium mt-1">"Deep NLP Processing & Operations Control Rooms"</p>
                <p className="text-slate-500 text-xs italic mt-0.5">Visual: Navigating into Document upload. Explores and reveals compiled Policy deadlines, key contact channels, and admin dashboard charts.</p>
                <div className="text-slate-600 mt-2">
                  <strong>Speaker:</strong> "Upload a standard document, and EEA does the cognitive work. It extracts a comprehensive, professional executive summary, compiles deadlines, contact details, and policy indices within 5 seconds. Administrators can access query analytics, user levels, and audit logs inside the control dashboard. EEA bridges secure AI with reliable policy guidance. Thank you for your review."
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 5. TESTING STRATEGY TAB */}
        {activeTab === 'testing' && (
          <div className="space-y-4 max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-teal-700" />
              Software Inspection & Verification Strategies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600" /> 1. Boundary Checks</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Asserts language moderation by submitting abusive strings and verifying the API stops execution prior to LLM calls. Validates expired OTP tokens safely fail.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5"><Rocket className="h-4 w-4 text-blue-600" /> 2. RAG Accuracy Checks</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submits adversarial prompts prompting the assistant to speculate. Assures the AI core falls back safely to 'hr-benefits@org.gov' when queries cannot be answered by document context.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5"><Presentation className="h-4 w-4 text-purple-600" /> 3. Load Escalation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Simulates simultaneous usage spikes from 5+ staff folders upload threads. Assures memory consumption is stable and average message execution completes in &lt;1.8 seconds.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
