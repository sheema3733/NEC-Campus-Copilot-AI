import React, { useState, useEffect, useRef } from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  ClipboardList,
  Ticket,
  FolderOpen,
  RefreshCw,
  Download,
  Eye,
  Trash2,
  Edit3,
  Plus,
  Send,
  Mic,
  Volume2,
  VolumeX,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Clock,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  Sparkles,
  FileText,
  Upload,
  Mail,
  GraduationCap,
  Database,
  Coffee,
  Layers,
  HelpCircle,
  ExternalLink,
  Shield,
  User,
  Check,
  Bot
} from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const SUGGESTED_QUESTIONS = [
  "Explain my DBMS syllabus Unit 3 Normalization topics.",
  "When is my Java exam, and what reporting time rule applies?",
  "Can I preview and download DBMS Unit 1 study notes?",
  "Explain Java Unit 3 Multithreading and Exception Handling.",
  "What is the NEC academic calendar schedule for 2026-2027?",
];

const MOTIVATIONAL_QUOTES = [
  {
    quote: "Engineering is the closest thing to magic that exists in the world.",
    author: "Elon Musk"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    quote: "Scientists investigate that which already is; Engineers create that which has never been.",
    author: "Albert Einstein"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

const DBMS_UNITS = [
  { unit: 1, title: "Unit 1: ER Modeling & DB Concepts", query: "DBMS Unit 1 ER Model" },
  { unit: 2, title: "Unit 2: Relational Algebra & SQL", query: "DBMS Unit 2 Relational Algebra and SQL" },
  { unit: 3, title: "Unit 3: Normalization (1NF, 2NF, 3NF, BCNF)", query: "DBMS Unit 3 Normalization" },
  { unit: 4, title: "Unit 4: Transactions & Concurrency Control", query: "DBMS Unit 4 Transactions and ACID" },
  { unit: 5, title: "Unit 5: Storage & B+ Tree Indexing", query: "DBMS Unit 5 B+ Trees and Indexing" },
];

const JAVA_UNITS = [
  { unit: 1, title: "Unit 1: Java Basics, OOP & Control Flow", query: "Java Unit 1 OOP Concepts" },
  { unit: 2, title: "Unit 2: Inheritance & Interfaces", query: "Java Unit 2 Inheritance and Interfaces" },
  { unit: 3, title: "Unit 3: Exception Handling & Multithreading", query: "Java Unit 3 Multithreading" },
  { unit: 4, title: "Unit 4: Collections Framework & I/O Streams", query: "Java Unit 4 Collections Framework" },
  { unit: 5, title: "Unit 5: Swing GUI & JDBC Connectivity", query: "Java Unit 5 JDBC Database Connectivity" },
];

export default function App() {
  // Authentication & Role State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nec_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Login Modal State
  const [showLoginModal, setShowLoginModal] = useState(!currentUser);
  const [loginMode, setLoginMode] = useState('student_login'); // 'student_login' | 'student_register' | 'admin_login'
  const [loginForm, setLoginForm] = useState({ name: '', email: '', mobile: '', password: '' });
  const [loginError, setLoginError] = useState(null);

  // Responsive Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Tab State ('dashboard' | 'chat' | 'study' | 'my_queries' | 'escalations' | 'docs')
  const [activeTab, setActiveTab] = useState(() => {
    const user = JSON.parse(localStorage.getItem('nec_user') || 'null');
    return user?.role === 'admin' ? 'escalations' : 'dashboard';
  });

  // Chat & Conversation Sessions State
  const [sessionId, setSessionId] = useState(() => 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5));
  const [conversations, setConversations] = useState([]);
  const [conversationsLoading, setConversationsLoading] = useState(false);
  const [chatDrawerOpen, setChatDrawerOpen] = useState(true);

  const initialGreeting = {
    sender: 'assistant',
    text: "Welcome to **NEC Campus Copilot AI**! I am your student academic assistant for Narasaraopeta Engineering College (Autonomous).\n\nAsk me about DBMS or Java course syllabi (Units 1–5), exam schedules, academic regulations, or request study materials to preview and download!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState([initialGreeting]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backendHealth, setBackendHealth] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isListeningVoice, setIsListeningVoice] = useState(false);

  // Student Escalation Confirmation Modal State
  const [showEscalateConfirmModal, setShowEscalateConfirmModal] = useState(false);
  const [escalateData, setEscalateData] = useState(null);
  const [escalateDescription, setEscalateDescription] = useState('');
  const [submittingTicket, setSubmittingTicket] = useState(false);

  // Study Material Preview Modal State
  const [showMaterialPreviewModal, setShowMaterialPreviewModal] = useState(false);
  const [previewMaterialData, setPreviewMaterialData] = useState(null);
  const [loadingPreview, setLoadingPreview] = useState(false);

  // Conversation Rename & Delete Modal State
  const [renameModal, setRenameModal] = useState({ isOpen: false, convId: null, currentTitle: '', newTitle: '' });
  const [deleteConfirmModal, setDeleteConfirmModal] = useState({ isOpen: false, convId: null, title: '' });

  // Student Queries & Notifications State
  const [studentTickets, setStudentTickets] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  // Motivational Quote State
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Study Mode State
  const [studySubject, setStudySubject] = useState('dbms'); // 'dbms' | 'java'
  const [studyTopic, setStudyTopic] = useState('Database Normalization (1NF, 2NF, 3NF, BCNF)');
  const [studyAction, setStudyAction] = useState('explain_simply');
  const [studyResult, setStudyResult] = useState(null);
  const [studyLoading, setStudyLoading] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Admin Knowledge Hub & Escalations State
  const [adminDocuments, setAdminDocuments] = useState([]);
  const [adminDocsLoading, setAdminDocsLoading] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [escalations, setEscalations] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingTicket, setEditingTicket] = useState(null);
  const [resolutionNote, setResolutionNote] = useState('');
  const [newStatus, setNewStatus] = useState('reviewed');
  const [adminMediaFile, setAdminMediaFile] = useState(null);
  const [adminMediaUrl, setAdminMediaUrl] = useState(null);
  const [adminUploadStatus, setAdminUploadStatus] = useState(null);

  // Functional Refresh & Notification Toast States
  const [refreshingStudentTickets, setRefreshingStudentTickets] = useState(false);
  const [refreshingEscalations, setRefreshingEscalations] = useState(false);
  const [refreshingAdminDocs, setRefreshingAdminDocs] = useState(false);
  const [toastNotification, setToastNotification] = useState(null);

  const showToast = (msg) => {
    setToastNotification(msg);
    setTimeout(() => setToastNotification(null), 3500);
  };

  const chatEndRef = useRef(null);

  // Lifecycle Effect
  useEffect(() => {
    checkHealth();

    if (currentUser?.role === 'admin') {
      fetchEscalations();
      fetchAdminDocuments();
    } else if (currentUser?.email) {
      fetchStudentTickets();
      fetchConversations();
    }

    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
    }, 6000);

    return () => clearInterval(quoteTimer);
  }, [currentUser]);

  useEffect(() => {
    if (activeTab === 'chat') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (activeTab === 'docs' && currentUser?.role === 'admin') {
      fetchAdminDocuments();
    }
  }, [messages, loading, activeTab]);

  const checkHealth = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      if (res.ok) {
        const data = await res.json();
        setBackendHealth(data);
      } else {
        setBackendHealth({ status: 'error' });
      }
    } catch (err) {
      setBackendHealth({ status: 'offline' });
    }
  };

  const fetchConversations = async () => {
    if (!currentUser?.email) return;
    setConversationsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/conversations?email=${encodeURIComponent(currentUser.email)}`);
      if (res.ok) {
        const data = await res.json();
        setConversations(data.conversations || []);
      }
    } catch (err) {
      console.error("Error fetching conversations:", err);
    } finally {
      setConversationsLoading(false);
    }
  };

  const fetchEscalations = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/escalations`);
      if (res.ok) {
        const data = await res.json();
        setEscalations(data.tickets || []);
      }
    } catch (err) {
      console.error("Error fetching escalations:", err);
    }
  };

  const fetchStudentTickets = async () => {
    if (!currentUser?.email) return;
    try {
      const res = await fetch(`${API_BASE_URL}/student-tickets?email=${encodeURIComponent(currentUser.email)}`);
      if (res.ok) {
        const data = await res.json();
        setStudentTickets(data.tickets || []);
        setUnreadNotifications(data.unread_notifications || 0);
      }
    } catch (err) {
      console.error("Error fetching student tickets:", err);
    }
  };

  const fetchAdminDocuments = async () => {
    if (currentUser?.role !== 'admin') return;
    setAdminDocsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/admin/documents`);
      if (res.ok) {
        const data = await res.json();
        setAdminDocuments(data.documents || []);
      }
    } catch (err) {
      console.error("Error fetching admin documents:", err);
    } finally {
      setAdminDocsLoading(false);
    }
  };

  const handleRefreshStudentTickets = async () => {
    if (refreshingStudentTickets || !currentUser?.email) return;
    setRefreshingStudentTickets(true);
    try {
      await fetchStudentTickets();
      showToast("Student ticket status refreshed successfully.");
    } catch (err) {
      showToast("Failed to refresh tickets.");
    } finally {
      setRefreshingStudentTickets(false);
    }
  };

  const handleRefreshEscalations = async () => {
    if (refreshingEscalations) return;
    setRefreshingEscalations(true);
    try {
      await fetchEscalations();
      showToast("Admin escalation tickets refreshed successfully.");
    } catch (err) {
      showToast("Failed to refresh escalations.");
    } finally {
      setRefreshingEscalations(false);
    }
  };

  const handleRefreshAdminDocs = async () => {
    if (refreshingAdminDocs) return;
    setRefreshingAdminDocs(true);
    try {
      await fetchAdminDocuments();
      await checkHealth();
      showToast("Ingested documents and RAG vector store refreshed.");
    } catch (err) {
      showToast("Failed to refresh documents.");
    } finally {
      setRefreshingAdminDocs(false);
    }
  };

  // Auth Handlers
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);

    if (loginMode === 'admin_login') {
      if (loginForm.name.trim() !== 'VST' || loginForm.password.trim() !== '577577') {
        setLoginError("Invalid Admin credentials! Use Name 'VST' and Password '577577'.");
        return;
      }
    }

    try {
      const endpoint = loginMode === 'student_register' ? '/register' : '/login';
      const bodyPayload = loginMode === 'student_register'
        ? { name: loginForm.name, email: loginForm.email, mobile: loginForm.mobile, password: loginForm.password }
        : { name_or_email: loginForm.name || loginForm.email, password: loginForm.password };

      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || data.message || "Authentication failed.");
      }

      const userData = data.user;
      setCurrentUser(userData);
      localStorage.setItem('nec_user', JSON.stringify(userData));
      setShowLoginModal(false);
      setLoginForm({ name: '', email: '', mobile: '', password: '' });

      if (userData.role === 'admin') {
        setActiveTab('escalations');
        fetchEscalations();
        fetchAdminDocuments();
      } else {
        setActiveTab('dashboard');
        fetchStudentTickets();
        fetchConversations();
      }
    } catch (err) {
      setLoginError(err.message);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('nec_user');
    setShowLoginModal(true);
    setActiveTab('dashboard');
  };

  // Conversation Session Handlers
  const handleNewChat = () => {
    const newId = 'conv_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    setSessionId(newId);
    setMessages([initialGreeting]);
    setError(null);
    setInput('');
  };

  const handleSelectConversation = async (conv) => {
    if (conv.id === sessionId) return;
    setSessionId(conv.id);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/conversations/${conv.id}/messages?email=${encodeURIComponent(currentUser.email)}`);
      if (res.ok) {
        const data = await res.json();
        const loadedMsgs = (data.messages || []).map((m) => ({
          sender: m.sender,
          text: m.text,
          tools_used: m.tools_used,
          citations: m.citations,
          offer_escalation: Boolean(m.offer_escalation),
          escalation_prompt: m.escalation_prompt,
          material_info: m.material_info,
          timestamp: new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }));
        setMessages(loadedMsgs.length > 0 ? loadedMsgs : [initialGreeting]);
      }
    } catch (err) {
      console.error("Error loading conversation messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenRename = (conv, e) => {
    e.stopPropagation();
    setRenameModal({
      isOpen: true,
      convId: conv.id,
      currentTitle: conv.title,
      newTitle: conv.title,
    });
  };

  const handleSaveRename = async () => {
    if (!renameModal.newTitle.trim()) return;
    try {
      const res = await fetch(`${API_BASE_URL}/conversations/${renameModal.convId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: renameModal.newTitle.trim(),
          email: currentUser.email,
        }),
      });
      if (res.ok) {
        setRenameModal({ isOpen: false, convId: null, currentTitle: '', newTitle: '' });
        fetchConversations();
      }
    } catch (err) {
      console.error("Error renaming conversation:", err);
    }
  };

  const handleOpenDelete = (conv, e) => {
    e.stopPropagation();
    setDeleteConfirmModal({
      isOpen: true,
      convId: conv.id,
      title: conv.title,
    });
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmModal.convId) return;
    try {
      const res = await fetch(`${API_BASE_URL}/conversations/${deleteConfirmModal.convId}?email=${encodeURIComponent(currentUser.email)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        if (sessionId === deleteConfirmModal.convId) {
          handleNewChat();
        }
        setDeleteConfirmModal({ isOpen: false, convId: null, title: '' });
        fetchConversations();
      }
    } catch (err) {
      console.error("Error deleting conversation:", err);
    }
  };

  // Chat Submission Handler
  const handleSend = async (questionText = input) => {
    const query = questionText.trim();
    if (!query || loading) return;

    setError(null);
    setInput('');

    const userMessage = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          session_id: sessionId,
          student_name: currentUser?.name || 'Student',
          email: currentUser?.email || 'student@nec.edu',
          mobile: currentUser?.mobile || 'N/A'
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || `Server error: ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage = {
        sender: 'assistant',
        text: data.answer || "No response received.",
        tools_used: data.tools_used || [],
        citations: data.citations || [],
        offer_escalation: Boolean(data.offer_escalation),
        escalation_prompt: data.escalation_prompt,
        material_info: data.material_info,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (currentUser?.email) {
        fetchConversations();
        fetchStudentTickets();
      }
      checkHealth();
    } catch (err) {
      console.error("Chat API Error:", err);
      setError(err.message || "Failed to reach backend server.");

      const errorMessage = {
        sender: 'assistant',
        text: `⚠️ **Error**: ${err.message}`,
        isError: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Student-Approved Escalation Handlers
  const handleOpenEscalateModal = (msg, questionFallback = "Academic Inquiry") => {
    const prompt = msg.escalation_prompt || {};
    setEscalateData({
      question: prompt.question || questionFallback,
      subject: prompt.subject || "General Academic",
      topic: prompt.topic || "Academic Assistance",
      context: prompt.context || "Unverified in official study documents.",
    });
    setEscalateDescription('');
    setShowEscalateConfirmModal(true);
  };

  const handleDismissEscalation = (msgIndex) => {
    setMessages((prev) => prev.map((m, idx) => {
      if (idx === msgIndex) {
        return { ...m, offer_escalation: false, escalationDismissed: true };
      }
      return m;
    }));
  };

  const handleConfirmEscalationSubmit = async () => {
    if (!escalateData || submittingTicket) return;
    setSubmittingTicket(true);

    try {
      const res = await fetch(`${API_BASE_URL}/escalations/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_question: escalateData.question,
          reason: "Student authorized escalation to Academic Support staff",
          subject: escalateData.subject,
          topic: escalateData.topic,
          context_notes: escalateDescription.trim() || escalateData.context,
          student_name: currentUser?.name || 'Student',
          email: currentUser?.email || 'student@nec.edu',
          mobile: currentUser?.mobile || 'N/A',
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Submission failed.");
      }

      const data = await res.json();
      const ticketId = data.ticket_id || data.ticket?.id;

      // Update message status in chat
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: `✅ **Escalation Ticket Submitted Successfully!**\n\n- **Ticket ID**: \`${ticketId}\`\n- **Subject**: ${escalateData.subject}\n- **Status**: Open (Under Review by Staff)\n\nCollege administration will review your question and send a direct response. You can track this under **My Queries & Notifications**.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);

      setShowEscalateConfirmModal(false);
      setEscalateData(null);
      fetchStudentTickets();
      checkHealth();
    } catch (err) {
      alert(`Error submitting escalation ticket: ${err.message}`);
    } finally {
      setSubmittingTicket(false);
    }
  };

  // Material Preview Modal Handler
  const handleOpenMaterialPreview = async (subject, unit) => {
    setLoadingPreview(true);
    setShowMaterialPreviewModal(true);
    setPreviewMaterialData(null);

    try {
      const res = await fetch(`${API_BASE_URL}/materials/preview?subject=${subject}&unit=${unit}`);
      if (res.ok) {
        const data = await res.json();
        setPreviewMaterialData(data);
      } else {
        const errData = await res.json();
        setPreviewMaterialData({ error: errData.detail || "Material not found." });
      }
    } catch (err) {
      setPreviewMaterialData({ error: `Network error: ${err.message}` });
    } finally {
      setLoadingPreview(false);
    }
  };

  // Study Mode Handlers
  const handleStudyModeAction = async (actionType = studyAction, topicText = studyTopic) => {
    if (!topicText.trim()) return;
    setStudyLoading(true);
    setStudyResult(null);
    setFlashcardFlipped(false);
    setCurrentCardIndex(0);

    try {
      const res = await fetch(`${API_BASE_URL}/study-mode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: actionType, topic: topicText }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate study content.");
      }

      const data = await res.json();
      setStudyResult(data);
    } catch (err) {
      console.error("Study mode error:", err);
      setStudyResult({ status: 'error', content: '⚠️ Failed to generate study content. Please try again.' });
    } finally {
      setStudyLoading(false);
    }
  };

  // Admin Knowledge Hub Handlers
  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!uploadFile) return;

    const formData = new FormData();
    formData.append('file', uploadFile);
    setUploadStatus('Uploading & Indexing RAG Document...');

    try {
      const res = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setUploadStatus(`✅ Success: Ingested '${data.filename}' into NEC RAG store! (${data.total_rag_chunks} total chunks indexed)`);
        setUploadFile(null);
        fetchAdminDocuments();
        checkHealth();
      } else {
        const errData = await res.json();
        setUploadStatus(`❌ Error: ${errData.detail || 'Upload failed'}`);
      }
    } catch (err) {
      setUploadStatus(`❌ Network error: ${err.message}`);
    }
  };

  const handleDeleteAdminDoc = async (filename) => {
    if (!window.confirm(`Are you sure you want to delete '${filename}' and purge its chunks from the vector store?`)) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/admin/documents/${filename}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAdminDocuments();
        checkHealth();
      } else {
        alert("Failed to delete document.");
      }
    } catch (err) {
      console.error("Error deleting document:", err);
    }
  };

  const handleReindexAdminDocs = async () => {
    setUploadStatus('Re-indexing all college documents into vector store...');
    try {
      const res = await fetch(`${API_BASE_URL}/admin/documents/reindex`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setUploadStatus(`✅ ${data.message}`);
        fetchAdminDocuments();
        checkHealth();
      } else {
        setUploadStatus("❌ Failed to re-index documents.");
      }
    } catch (err) {
      setUploadStatus(`❌ Network error: ${err.message}`);
    }
  };

  // Admin Ticket Resolution Handlers
  const handleAdminMediaUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setAdminMediaFile(file);
    setAdminUploadStatus("Uploading resolution media file...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API_BASE_URL}/upload-resolution-media`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setAdminMediaUrl(data.file_url);
        setAdminUploadStatus(`✅ Attached file: '${file.name}'`);
      } else {
        setAdminUploadStatus("❌ Failed to upload media file.");
      }
    } catch (err) {
      setAdminUploadStatus(`❌ Error: ${err.message}`);
    }
  };

  const handleUpdateTicket = async (ticketId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/escalations/${ticketId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          resolution_notes: resolutionNote,
          media_file: adminMediaUrl,
        }),
      });

      if (res.ok) {
        setEditingTicket(null);
        setResolutionNote('');
        setAdminMediaFile(null);
        setAdminMediaUrl(null);
        setAdminUploadStatus(null);
        fetchEscalations();
        checkHealth();
      }
    } catch (err) {
      console.error("Error updating ticket:", err);
    }
  };

  const handleMarkRead = async (ticketId) => {
    try {
      await fetch(`${API_BASE_URL}/mark-ticket-read/${ticketId}`, { method: 'POST' });
      fetchStudentTickets();
    } catch (err) {
      console.error("Error marking ticket read:", err);
    }
  };

  const startVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;

    recognition.onstart = () => setIsListeningVoice(true);
    recognition.onend = () => setIsListeningVoice(false);
    recognition.onerror = () => setIsListeningVoice(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListeningVoice(false);
    };

    recognition.start();
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }
      const cleanText = text.replace(/###/g, '').replace(/\*\*/g, '').replace(/\[.*?\]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderFormattedText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Detect Markdown Table: line contains | and next line is table delimiter
      if (line.trim().startsWith('|') && i + 1 < lines.length && (lines[i + 1].includes('|-') || lines[i + 1].includes('|:---') || lines[i + 1].includes('|---'))) {
        const tableLines = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }

        if (tableLines.length >= 2) {
          const rawHeader = tableLines[0].split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
          const rawData = tableLines.slice(2).map(r => r.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1));

          elements.push(
            <div key={`table-${i}`} className="table-responsive-wrapper">
              <table className="academic-table">
                <thead>
                  <tr>
                    {rawHeader.map((h, hIdx) => (
                      <th key={hIdx}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rawData.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      if (line.startsWith('### ')) {
        elements.push(<h4 key={i} className="md-heading">{line.replace('### ', '')}</h4>);
      } else if (line.startsWith('- **')) {
        const parts = line.split('**: ');
        elements.push(
          <li key={i} className="md-list-item">
            <strong>{parts[0].replace('- **', '')}:</strong> {parts.slice(1).join('**: ')}
          </li>
        );
      } else if (line.startsWith('- ')) {
        elements.push(<li key={i} className="md-list-item">{line.replace('- ', '')}</li>);
      } else if (!line.trim()) {
        elements.push(<div key={i} className="md-spacer" />);
      } else {
        elements.push(<p key={i} className="md-paragraph">{line}</p>);
      }
      i++;
    }

    return elements;
  };

  const filteredTickets = statusFilter === 'all'
    ? escalations
    : escalations.filter((t) => t.status === statusFilter);

  return (
    <div className="nec-app-layout">
      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Toast Notification Banner */}
      {toastNotification && (
        <div className="nec-toast-banner">
          <CheckCircle2 size={18} className="toast-icon-success" />
          <span>{toastNotification}</span>
        </div>
      )}

      {/* Login Page: Dedicated Plain White (#FFFFFF) Screen with Official NEC Logo */}
      {(!currentUser || showLoginModal) && (
        <div className="login-page-screen">
          <div className="login-modal-card">
            <div className="modal-header">
              <div className="login-logo-wrapper">
                <img src="/nec-logo.png" alt="Narasaraopeta Engineering College" className="login-nec-logo" />
              </div>
              <h2 className="login-title">NEC Campus Copilot AI</h2>
              <p className="college-subtext">Narasaraopeta Engineering College (Autonomous)</p>
              <div className="auth-badges-row">
                <span className="college-badge">Autonomous</span>
                <span className="college-badge">NAAC 'A+'</span>
                <span className="college-badge">R20 / R23</span>
              </div>
            </div>

            <div className="login-tab-switcher">
              <button
                type="button"
                className={loginMode === 'student_login' ? 'active' : ''}
                onClick={() => { setLoginMode('student_login'); setLoginError(null); }}
              >
                <User size={15} /> Student Login
              </button>
              <button
                type="button"
                className={loginMode === 'student_register' ? 'active' : ''}
                onClick={() => { setLoginMode('student_register'); setLoginError(null); }}
              >
                <Plus size={15} /> Register
              </button>
              <button
                type="button"
                className={loginMode === 'admin_login' ? 'active' : ''}
                onClick={() => { setLoginMode('admin_login'); setLoginError(null); setLoginForm({ name: 'VST', email: '', mobile: '', password: '' }); }}
              >
                <Shield size={15} /> Admin (VST)
              </button>
            </div>

            {loginError && (
              <div className="login-error-msg">
                <AlertTriangle size={16} />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="login-form">
              {loginMode === 'student_register' && (
                <div className="form-group">
                  <label>Full Student Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alice Smith"
                    value={loginForm.name}
                    onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                  />
                </div>
              )}

              {loginMode === 'admin_login' ? (
                <div className="form-group">
                  <label>Admin Name:</label>
                  <input
                    type="text"
                    required
                    readOnly
                    value="VST"
                  />
                </div>
              ) : (
                <div className="form-group">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="student@nec.edu"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  />
                </div>
              )}

              {loginMode === 'student_register' && (
                <div className="form-group">
                  <label>Mobile Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={loginForm.mobile}
                    onChange={(e) => setLoginForm({ ...loginForm, mobile: e.target.value })}
                  />
                </div>
              )}

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  required
                  placeholder={loginMode === 'admin_login' ? "Enter Admin Password (577577)" : "Enter Password"}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                />
              </div>

              <button type="submit" className="login-submit-btn">
                {loginMode === 'student_register' ? 'Register Account & Enter ➔' : (loginMode === 'admin_login' ? 'Log in as Admin (VST) ➔' : 'Log in as Student ➔')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Student-Approved Escalation Confirmation Modal */}
      {showEscalateConfirmModal && escalateData && (
        <div className="modal-backdrop">
          <div className="confirm-modal-card">
            <div className="confirm-modal-header">
              <h3>🎫 Request Human Academic Support</h3>
              <p>Authorize submitting this question to Narasaraopeta Engineering College staff</p>
            </div>

            <div className="confirm-modal-body">
              <div className="confirm-info-box">
                <p><strong>Question:</strong> {escalateData.question}</p>
                <p><strong>Academic Subject:</strong> {escalateData.subject}</p>
                <p><strong>Identified Topic:</strong> {escalateData.topic}</p>
                <p className="context-note"><strong>Reason:</strong> {escalateData.context}</p>
              </div>

              <div className="form-group">
                <label>Additional Notes or Details for Staff (Optional):</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Please clarify Unit 3 boundary conditions or exemption eligibility..."
                  value={escalateDescription}
                  onChange={(e) => setEscalateDescription(e.target.value)}
                />
              </div>

              <div className="confirm-modal-actions">
                <button
                  className="confirm-btn-primary"
                  onClick={handleConfirmEscalationSubmit}
                  disabled={submittingTicket}
                >
                  {submittingTicket ? 'Submitting Ticket...' : 'Confirm & Send to Staff ➔'}
                </button>
                <button
                  className="confirm-btn-secondary"
                  onClick={() => setShowEscalateConfirmModal(false)}
                  disabled={submittingTicket}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Study Material Preview Modal */}
      {showMaterialPreviewModal && (
        <div className="modal-backdrop">
          <div className="material-preview-card">
            <div className="preview-modal-header">
              <div className="header-titles">
                <h3>📄 Verified Academic Study Notes</h3>
                <p>{previewMaterialData?.subject} ({previewMaterialData?.code}) — {previewMaterialData?.title}</p>
              </div>
              <button className="close-modal-btn" onClick={() => setShowMaterialPreviewModal(false)}>✕</button>
            </div>

            <div className="preview-modal-body">
              {loadingPreview ? (
                <div className="preview-loading">
                  <div className="typing-indicator"><span></span><span></span><span></span></div>
                  <p>Loading verified study notes from knowledge repository...</p>
                </div>
              ) : previewMaterialData?.error ? (
                <div className="preview-error">⚠️ {previewMaterialData.error}</div>
              ) : (
                <div className="preview-content-box">
                  <pre className="study-text-render">{previewMaterialData?.content}</pre>
                </div>
              )}
            </div>

            <div className="preview-modal-footer">
              {previewMaterialData?.download_pdf_url && (
                <a
                  href={`${API_BASE_URL}${previewMaterialData.download_pdf_url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="download-pdf-btn"
                >
                  📥 Download Official PDF
                </a>
              )}
              {previewMaterialData?.download_txt_url && (
                <a
                  href={`${API_BASE_URL}${previewMaterialData.download_txt_url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="download-txt-btn"
                >
                  📄 Download Plain Text Notes
                </a>
              )}
              <button className="footer-close-btn" onClick={() => setShowMaterialPreviewModal(false)}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conversation Rename Modal */}
      {renameModal.isOpen && (
        <div className="modal-backdrop">
          <div className="rename-modal-card">
            <h4>✏️ Rename Conversation</h4>
            <input
              type="text"
              value={renameModal.newTitle}
              onChange={(e) => setRenameModal({ ...renameModal, newTitle: e.target.value })}
              placeholder="Enter new conversation title"
              maxLength={60}
            />
            <div className="rename-actions">
              <button className="confirm-btn-primary" onClick={handleSaveRename}>Save Title</button>
              <button className="confirm-btn-secondary" onClick={() => setRenameModal({ isOpen: false, convId: null, currentTitle: '', newTitle: '' })}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Conversation Delete Confirm Modal */}
      {deleteConfirmModal.isOpen && (
        <div className="modal-backdrop">
          <div className="rename-modal-card">
            <h4>🗑️ Delete Conversation?</h4>
            <p>Are you sure you want to permanently delete <strong>"{deleteConfirmModal.title}"</strong>? This will remove all saved chat messages.</p>
            <div className="rename-actions">
              <button className="delete-confirm-btn" onClick={handleConfirmDelete}>Permanently Delete</button>
              <button className="confirm-btn-secondary" onClick={() => setDeleteConfirmModal({ isOpen: false, convId: null, title: '' })}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`nec-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand">
          <img src="/nec-logo.png" alt="NEC College Logo" className="sidebar-brand-logo" />
          <div className="brand-text">
            <h2>Campus Copilot AI</h2>
            <p className="college-subtext">Narasaraopeta Engineering College</p>
          </div>
          <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-menu">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard Overview</span>
          </button>

          {/* Student Navigation */}
          {currentUser?.role !== 'admin' && (
            <>
              <button
                className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`}
                onClick={() => { setActiveTab('chat'); setMobileMenuOpen(false); }}
              >
                <MessageSquare size={18} />
                <span>Academic Assistant</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'study' ? 'active' : ''}`}
                onClick={() => { setActiveTab('study'); setMobileMenuOpen(false); }}
              >
                <BookOpen size={18} />
                <span>Interactive Study Hub</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'my_queries' ? 'active' : ''}`}
                onClick={() => { setActiveTab('my_queries'); fetchStudentTickets(); setMobileMenuOpen(false); }}
              >
                <ClipboardList size={18} />
                <span>My Queries & Tickets</span>
                {unreadNotifications > 0 && <span className="notif-pill">{unreadNotifications}</span>}
              </button>
            </>
          )}

          {/* STRICT ROLE ISOLATION: Admin Navigation */}
          {currentUser?.role === 'admin' && (
            <>
              <button
                className={`nav-item ${activeTab === 'escalations' ? 'active' : ''}`}
                onClick={() => { setActiveTab('escalations'); fetchEscalations(); setMobileMenuOpen(false); }}
              >
                <Ticket size={18} />
                <span>Escalation Tickets ({backendHealth?.escalation_tickets_count || 0})</span>
              </button>
              <button
                className={`nav-item ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => { setActiveTab('docs'); fetchAdminDocuments(); setMobileMenuOpen(false); }}
              >
                <FolderOpen size={18} />
                <span>Knowledge Hub & Docs ({backendHealth?.rag_chunks_count || 0})</span>
              </button>
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          <div className="disclaimer-note">
            ⚠️ <strong>Autonomous Regulation</strong><br />
            Curriculum Grounded (R20 / R23)<br />
            Official portal: <a href="https://www.nrtec.in/" target="_blank" rel="noreferrer">nrtec.in</a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="nec-main-wrapper">
        {/* Top Header */}
        <header className="nec-header">
          <div className="header-left-group">
            <button
              className="hamburger-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Toggle Menu"
            >
              <Menu size={20} />
            </button>
            <img src="/nec-logo.png" alt="NEC Logo" className="header-nec-logo" />
            <div className="header-info">
              <span className="college-badge">Autonomous • NAAC 'A+' • EAPCET: NSPE</span>
            </div>
          </div>

          <div className="header-status-area">
            {currentUser && (
              <div className="user-profile-badge">
                {currentUser.role === 'admin' ? <Shield size={14} className="badge-role-icon" /> : <User size={14} className="badge-role-icon" />}
                <span><strong>{currentUser.name}</strong></span>
                <button className="logout-btn" onClick={handleLogout} title="Sign Out">
                  <LogOut size={12} /> Logout
                </button>
              </div>
            )}

            {currentUser?.role === 'student' && unreadNotifications > 0 && (
              <span
                className="notif-header-badge"
                onClick={() => { setActiveTab('my_queries'); fetchStudentTickets(); }}
                title="New Staff Resolution Received!"
              >
                🔔 {unreadNotifications} New Reply
              </span>
            )}

            {backendHealth ? (
              <span className={`badge ${backendHealth.status === 'ok' ? 'badge-success' : 'badge-error'}`}>
                ● {backendHealth.status === 'ok' ? `Backend Online (${backendHealth.groq_configured ? 'Groq' : 'Fallback'})` : 'Backend Error'}
              </span>
            ) : (
              <span className="badge badge-warning">● Connecting...</span>
            )}

            {activeTab === 'chat' && (
              <button className="memory-reset-btn" onClick={handleNewChat} title="Start a fresh chat conversation">
                <Plus size={14} /> New Chat
              </button>
            )}
          </div>
        </header>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="tab-pane dashboard-pane">
            <div className="welcome-banner">
              <span className="welcome-pill-badge"><Sparkles size={13} /> AI-POWERED ACADEMIC COPILOT</span>
              <h2>Welcome to NEC Campus Copilot AI!</h2>
              <p>Your comprehensive student academic assistant for Narasaraopeta Engineering College. Explore verified 5-unit course materials for DBMS & Java, query exam schedules, or request human academic support.</p>
            </div>

            <div className="stats-cards-grid">
              <div className="stat-card">
                <span className="stat-icon-wrapper"><FileText size={26} className="stat-lucide-icon" /></span>
                <div>
                  <h4>RAG Knowledge Chunks</h4>
                  <p className="stat-num">{backendHealth?.rag_chunks_count || 0}</p>
                  <span className="stat-sub">Units 1–5 DBMS & Java Indexed</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon-wrapper"><Ticket size={26} className="stat-lucide-icon" /></span>
                <div>
                  <h4>Active Support Tickets</h4>
                  <p className="stat-num">{backendHealth?.escalation_tickets_count || 0}</p>
                  <span className="stat-sub">Persisted in SQLite DB</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon-wrapper"><Bot size={26} className="stat-lucide-icon" /></span>
                <div>
                  <h4>Active Groq Model</h4>
                  <p className="stat-num">{backendHealth?.groq_model || 'Groq API'}</p>
                  <span className="stat-sub">Agentic Tool-Calling</span>
                </div>
              </div>
            </div>

            {/* Motivational Quote Box */}
            <div className="quote-banner-container">
              <div className="quote-content-box slow-fade-in" key={quoteIndex}>
                <p className="quote-text-vibrant">"{MOTIVATIONAL_QUOTES[quoteIndex].quote}"</p>
                <p className="quote-author-vibrant">— {MOTIVATIONAL_QUOTES[quoteIndex].author}</p>
              </div>
              <div className="quote-dots">
                {MOTIVATIONAL_QUOTES.map((_, idx) => (
                  <span
                    key={idx}
                    className={`quote-dot ${idx === quoteIndex ? 'active' : ''}`}
                    onClick={() => setQuoteIndex(idx)}
                    title={`Quote ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="dashboard-columns">
              <div className="dash-col">
                <h3><Sparkles size={16} /> Quick Study Actions</h3>
                <div className="quick-actions-list">
                  <button onClick={() => { setActiveTab('chat'); handleSend("Explain my DBMS syllabus Unit 3 Normalization."); }}>
                    <Database size={15} /> <span>Query DBMS Syllabus (CS301)</span>
                  </button>
                  <button onClick={() => { setActiveTab('chat'); handleSend("Can I preview and download Java Unit 1 study notes?"); }}>
                    <Coffee size={15} /> <span>Preview Java Programming Notes (JAVA101)</span>
                  </button>
                  <button onClick={() => { setActiveTab('chat'); handleSend("When is my Java exam, and what reporting time applies?"); }}>
                    <Clock size={15} /> <span>Check Autonomous Exam Schedules</span>
                  </button>
                  <button onClick={() => { setActiveTab('study'); }}>
                    <Layers size={15} /> <span>Launch Interactive 3D Study Flashcards</span>
                  </button>
                </div>
              </div>

              <div className="dash-col">
                <h3><ExternalLink size={16} /> Official NEC Portal Links</h3>
                <ul className="official-links-list">
                  <li><ExternalLink size={14} /> <a href="https://www.nrtec.in/" target="_blank" rel="noreferrer">NEC Official Website (nrtec.in)</a></li>
                  <li><ExternalLink size={14} /> <a href="https://www.nrtec.in/academic-calendar/" target="_blank" rel="noreferrer">Official Academic Calendar</a></li>
                  <li><ExternalLink size={14} /> <a href="https://www.nrtec.in/notifications/" target="_blank" rel="noreferrer">Autonomous Examination Notifications</a></li>
                  <li><ExternalLink size={14} /> <a href="https://www.nrtec.in/syllabus-2/" target="_blank" rel="noreferrer">R20 / R23 Autonomous Syllabi</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ACADEMIC ASSISTANT WITH CONVERSATION HISTORY */}
        {activeTab === 'chat' && (
          <div className="chat-layout-container">
            {/* Conversation History Drawer */}
            <aside className={`chat-history-sidebar ${chatDrawerOpen ? 'open' : 'collapsed'}`}>
              <div className="history-header">
                <span className="history-title">Saved Chats</span>
                <button
                  className="new-chat-btn"
                  onClick={handleNewChat}
                  title="Start New Chat"
                >
                  <Plus size={14} /> New
                </button>
              </div>

              <div className="history-list">
                {conversationsLoading ? (
                  <div className="history-loading">Loading conversations...</div>
                ) : conversations.length === 0 ? (
                  <div className="history-empty">No previous chats. Start a new conversation!</div>
                ) : (
                  conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`history-item ${conv.id === sessionId ? 'active' : ''}`}
                      onClick={() => handleSelectConversation(conv)}
                    >
                      <div className="history-item-left">
                        <MessageSquare size={14} className="history-icon" />
                        <span className="history-item-title" title={conv.title}>{conv.title}</span>
                      </div>
                      <div className="history-item-actions">
                        <button
                          className="action-icon-btn"
                          title="Rename Chat"
                          onClick={(e) => handleOpenRename(conv, e)}
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          className="action-icon-btn delete-icon"
                          title="Delete Chat"
                          onClick={(e) => handleOpenDelete(conv, e)}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </aside>

            {/* Chat Messages Main Area */}
            <main className="tab-pane chat-pane">
              {error && (
                <div className="error-banner">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                  <button onClick={() => setError(null)}><X size={14} /></button>
                </div>
              )}

              <div className="messages-list">
                {messages.map((msg, index) => (
                  <div key={index} className={`message-row ${msg.sender}`}>
                    <div className="avatar">
                      {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
                    </div>
                    <div className={`message-bubble ${msg.sender} ${msg.isError ? 'error-bubble' : ''}`}>
                      <div className="message-header">
                        <span className="sender-name">
                          {msg.sender === 'user' ? (currentUser?.name || 'NEC Student') : 'NEC Copilot AI'}
                        </span>
                        <div className="header-right-tools">
                          {msg.sender === 'assistant' && (
                            <button
                              className="audio-speak-btn"
                              onClick={() => speakText(msg.text)}
                              title="Listen to response"
                            >
                              {isPlayingAudio ? <VolumeX size={13} /> : <Volume2 size={13} />}
                              <span>{isPlayingAudio ? 'Stop' : 'Listen'}</span>
                            </button>
                          )}
                          <span className="timestamp">{msg.timestamp}</span>
                        </div>
                      </div>

                      <div className="message-content">{renderFormattedText(msg.text)}</div>

                      {/* Verified Study Material Card */}
                      {msg.material_info && (
                        <div className="material-card-inline">
                          <div className="mat-badge">
                            <CheckCircle2 size={14} /> VERIFIED ACADEMIC MATERIAL AVAILABLE
                          </div>
                          <h5>{msg.material_info.subject} ({msg.material_info.code})</h5>
                          <p className="mat-unit-title">Unit {msg.material_info.unit}: {msg.material_info.title}</p>
                          <div className="mat-actions-row">
                            <button
                              className="mat-btn-preview"
                              onClick={() => handleOpenMaterialPreview(msg.material_info.subject_slug, msg.material_info.unit)}
                            >
                              <Eye size={14} /> Preview Material
                            </button>
                            <a
                              href={`${API_BASE_URL}/materials/download?subject=${msg.material_info.subject_slug}&unit=${msg.material_info.unit}&format=pdf`}
                              target="_blank"
                              rel="noreferrer"
                              className="mat-btn-download-pdf"
                            >
                              <Download size={14} /> Download PDF
                            </a>
                            <a
                              href={`${API_BASE_URL}/materials/download?subject=${msg.material_info.subject_slug}&unit=${msg.material_info.unit}&format=txt`}
                              target="_blank"
                              rel="noreferrer"
                              className="mat-btn-download-txt"
                            >
                              <FileText size={14} /> Download TXT
                            </a>
                          </div>
                        </div>
                      )}

                      {/* In-Chat Human Escalation Card */}
                      {msg.offer_escalation && !msg.escalationDismissed && (
                        <div className="escalation-offer-card">
                          <div className="escalation-icon-title">
                            <AlertTriangle size={18} className="warn-icon" />
                            <strong>Academic Material Not Found</strong>
                          </div>
                          <p className="escalation-text">
                            I couldn't find sufficient information to answer this question in the available academic materials. Would you like to raise a ticket with the academic support team?
                          </p>
                          <div className="escalation-actions-row">
                            <button
                              className="btn-send-admin"
                              onClick={() => handleOpenEscalateModal(msg, messages[index - 1]?.text)}
                            >
                              <Mail size={14} /> Send to Admin
                            </button>
                            <button
                              className="btn-continue-chat"
                              onClick={() => handleDismissEscalation(index)}
                            >
                              Continue Chat
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Tool Citations */}
                      {msg.citations && msg.citations.length > 0 && (
                        <div className="citations-tray">
                          <span className="tray-title"><BookOpen size={13} /> Verified Sources:</span>
                          {msg.citations.map((c, i) => (
                            <span key={i} className="citation-tag">{c}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="message-row assistant">
                    <div className="avatar"><Bot size={18} /></div>
                    <div className="message-bubble assistant loading-bubble">
                      <div className="typing-indicator"><span></span><span></span><span></span></div>
                      <span className="loading-text">NEC Copilot is retrieving verified syllabus notes and running Groq LLM...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Suggested Questions */}
              <div className="examples-container">
                <span className="examples-title">Suggested Q&A:</span>
                <div className="example-chips">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button key={idx} className="chip-btn" disabled={loading} onClick={() => handleSend(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="input-container">
                <button
                  className={`voice-mic-btn ${isListeningVoice ? 'listening' : ''}`}
                  onClick={startVoiceInput}
                  title="Voice Input"
                  disabled={loading}
                >
                  <Mic size={18} />
                </button>
                <textarea
                  className="chat-textarea"
                  placeholder="Ask any academic or syllabus question grounded in NEC Autonomous materials..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  rows={2}
                />
                <button className="send-btn" onClick={() => handleSend()} disabled={loading || !input.trim()}>
                  <Send size={15} />
                  <span>{loading ? 'Processing...' : 'Send Query'}</span>
                </button>
              </div>
            </main>
          </div>
        )}

        {/* TAB 3: INTERACTIVE STUDY HUB */}
        {activeTab === 'study' && (
          <div className="tab-pane study-pane">
            <h2>📚 Interactive Study Hub</h2>
            <p className="tab-desc">Curriculum-grounded study modes for Narasaraopeta Engineering College. Explore Units 1–5 for Database Management Systems and Java Programming.</p>

            {/* Subject Switcher & Unit Pills */}
            <div className="study-subject-switcher">
              <button
                className={`sub-tab-btn ${studySubject === 'dbms' ? 'active' : ''}`}
                onClick={() => {
                  setStudySubject('dbms');
                  setStudyTopic('Database Normalization (1NF, 2NF, 3NF, BCNF)');
                }}
              >
                🗄️ DBMS (CS301) — 5 Units
              </button>
              <button
                className={`sub-tab-btn ${studySubject === 'java' ? 'active' : ''}`}
                onClick={() => {
                  setStudySubject('java');
                  setStudyTopic('Java Multithreading & Exception Handling');
                }}
              >
                <Database size={15} /> <span>DBMS (CS301) — 5 Units</span>
              </button>
              <button
                className={`sub-tab-btn ${studySubject === 'java' ? 'active' : ''}`}
                onClick={() => {
                  setStudySubject('java');
                  setStudyTopic('Java Multithreading & Exception Handling');
                }}
              >
                <Coffee size={15} /> <span>Java (JAVA101) — 5 Units</span>
              </button>
            </div>

            {/* Quick Unit Pills */}
            <div className="unit-pills-row">
              {(studySubject === 'dbms' ? DBMS_UNITS : JAVA_UNITS).map((u) => (
                <button
                  key={u.unit}
                  className="unit-pill-btn"
                  onClick={() => {
                    setStudyTopic(u.query);
                    handleStudyModeAction(studyAction, u.query);
                  }}
                >
                  <BookOpen size={13} /> <span>{u.title}</span>
                </button>
              ))}
            </div>

            <div className="study-controls-card">
              <div className="input-group">
                <label>Study Topic / Concept:</label>
                <input
                  type="text"
                  value={studyTopic}
                  onChange={(e) => setStudyTopic(e.target.value)}
                  placeholder="e.g. Relational Algebra, BCNF, Exception Handling, JDBC..."
                />
              </div>

              <div className="study-buttons-row">
                <button
                  className={`action-btn ${studyAction === 'explain_simply' ? 'active' : ''}`}
                  onClick={() => { setStudyAction('explain_simply'); handleStudyModeAction('explain_simply'); }}
                  disabled={studyLoading}
                >
                  <Sparkles size={14} /> <span>Explain Simply</span>
                </button>
                <button
                  className={`action-btn ${studyAction === 'practical_example' ? 'active' : ''}`}
                  onClick={() => { setStudyAction('practical_example'); handleStudyModeAction('practical_example'); }}
                  disabled={studyLoading}
                >
                  <FileText size={14} /> <span>Practical Example</span>
                </button>
                <button
                  className={`action-btn ${studyAction === 'practice_questions' ? 'active' : ''}`}
                  onClick={() => { setStudyAction('practice_questions'); handleStudyModeAction('practice_questions'); }}
                  disabled={studyLoading}
                >
                  <HelpCircle size={14} /> <span>5 Practice Questions</span>
                </button>
                <button
                  className={`action-btn ${studyAction === 'flashcards' ? 'active' : ''}`}
                  onClick={() => { setStudyAction('flashcards'); handleStudyModeAction('flashcards'); }}
                  disabled={studyLoading}
                >
                  <Layers size={14} /> <span>3D Flashcards</span>
                </button>
                <button
                  className={`action-btn ${studyAction === 'summarize_notes' ? 'active' : ''}`}
                  onClick={() => { setStudyAction('summarize_notes'); handleStudyModeAction('summarize_notes'); }}
                  disabled={studyLoading}
                >
                  <BookOpen size={14} /> <span>Summarize Notes</span>
                </button>
              </div>
            </div>

            {studyLoading && (
              <div className="study-loading">
                <div className="typing-indicator"><span></span><span></span><span></span></div>
                <span>Retrieving syllabus notes and synthesizing explanation...</span>
              </div>
            )}

            {/* In-Study Hub Escalation Offer if unverified topic */}
            {studyResult?.offer_escalation && (
              <div className="study-escalate-card">
                <div className="escalate-header">
                  <span>⚠️</span>
                  <h4>Insufficient Evidence for Topic</h4>
                </div>
                <p>{studyResult.message || `Could not find verified materials for '${studyTopic}'. Would you like to request notes from Academic Staff?`}</p>
                <div className="escalate-btns">
                  <button
                    className="btn-send-admin"
                    onClick={() => handleOpenEscalateModal(studyResult, `Study material requested for '${studyTopic}'`)}
                  >
                    ✉️ Send Query to Admin
                  </button>
                </div>
              </div>
            )}

            {/* 3D Interactive Flashcards Widget */}
            {studyAction === 'flashcards' && !studyLoading && studyResult?.flashcards && (
              <div className="flashcard-widget-container">
                <h3>🎴 3D Interactive Study Flashcards</h3>
                <div
                  className={`flip-card ${flashcardFlipped ? 'flipped' : ''}`}
                  onClick={() => setFlashcardFlipped(!flashcardFlipped)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <span className="card-badge">QUESTION ({currentCardIndex + 1}/{studyResult.flashcards.length})</span>
                      <p>{studyResult.flashcards[currentCardIndex]?.front}</p>
                      <span className="flip-hint">👆 Click to Flip Answer</span>
                    </div>
                    <div className="flip-card-back">
                      <span className="card-badge back">ANSWER</span>
                      <p>{studyResult.flashcards[currentCardIndex]?.back}</p>
                      <span className="flip-hint">👆 Click to Flip Question</span>
                    </div>
                  </div>
                </div>

                <div className="card-controls">
                  <button onClick={() => { setFlashcardFlipped(false); setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : studyResult.flashcards.length - 1)); }}>
                    ◀ Previous Card
                  </button>
                  <button onClick={() => { setFlashcardFlipped(false); setCurrentCardIndex((prev) => (prev < studyResult.flashcards.length - 1 ? prev + 1 : 0)); }}>
                    Next Card ▶
                  </button>
                </div>
              </div>
            )}

            {/* Text Study Result */}
            {studyResult && studyAction !== 'flashcards' && !studyResult.offer_escalation && (
              <div className="study-result-card">
                {studyResult.is_practice_label && (
                  <div className="practice-disclaimer-badge">
                    ⚠️ {studyResult.is_practice_label}
                  </div>
                )}
                <div className="study-content">
                  {renderFormattedText(studyResult.content)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: STUDENT MY QUERIES & TICKETS */}
        {activeTab === 'my_queries' && currentUser?.role !== 'admin' && (
          <div className="tab-pane student-queries-pane">
            <div className="tab-header-row">
              <div className="tab-header-left">
                <h2><ClipboardList size={22} className="tab-header-icon" /> My Queries & Academic Tickets</h2>
                <button
                  className={`refresh-btn ${refreshingStudentTickets ? 'is-refreshing' : ''}`}
                  onClick={handleRefreshStudentTickets}
                  disabled={refreshingStudentTickets}
                  title="Live Refresh Ticket Data"
                >
                  <RefreshCw size={15} className={refreshingStudentTickets ? 'spin' : ''} />
                  <span>{refreshingStudentTickets ? 'Refreshing...' : 'Refresh Status'}</span>
                </button>
              </div>
            </div>
            <p className="tab-desc">Track status and view resolution notes and attached documents dispatched by Narasaraopeta Engineering College administration.</p>

            {studentTickets.length === 0 ? (
              <div className="empty-state">
                <p>You have no submitted tickets yet.</p>
                <p className="empty-sub">When you ask a question in Academic Assistant that requires human support, you can authorize escalation to create a ticket.</p>
              </div>
            ) : (
              <div className="student-tickets-list">
                {studentTickets.map((t) => (
                  <div key={t.id || t.ticket_id} className={`student-ticket-card status-${t.status} ${t.notified ? 'has-notification' : ''}`}>
                    <div className="ticket-card-header">
                      <div className="header-left">
                        <span className="ticket-id">🎫 Ticket ID: {t.id || t.ticket_id}</span>
                        {t.notified === 1 && (
                          <span className="new-notif-pill" onClick={() => handleMarkRead(t.id || t.ticket_id)}>
                            🔔 New Reply Received (Click to Mark Read)
                          </span>
                        )}
                      </div>
                      <span className={`status-badge badge-${t.status}`}>{t.status.toUpperCase()}</span>
                    </div>

                    <div className="stepper-timeline">
                      <span className={`step-dot ${t.status === 'open' || t.status === 'in_progress' || t.status === 'resolved' || t.status === 'pending' || t.status === 'reviewed' ? 'active' : ''}`}>1. Submitted</span>
                      <span className={`step-dot ${t.status === 'in_progress' || t.status === 'reviewed' || t.status === 'resolved' ? 'active' : ''}`}>2. Under Review</span>
                      <span className={`step-dot ${t.status === 'resolved' || t.status === 'closed' ? 'active' : ''}`}>3. Resolved</span>
                    </div>

                    <div className="ticket-query-box">
                      <p><strong>Query:</strong> {t.student_question}</p>
                      <p><strong>Subject / Topic:</strong> {t.subject} — {t.topic}</p>
                      <span className="ticket-meta">Submitted On: {new Date(t.created_at).toLocaleString()}</span>
                    </div>

                    {(t.resolution_notes || t.media_file) && (
                      <div className="received-email-box">
                        <div className="email-header-bar">
                          <span>📧 <strong>Resolution Response from Staff (Admin VST)</strong></span>
                          {t.email_status && <span className="email-status-sub">{t.email_status}</span>}
                        </div>
                        <div className="email-body">
                          <p><strong>Admin Response:</strong></p>
                          <p className="notes-text">"{t.resolution_notes}"</p>

                          {t.media_file && (
                            <div className="media-attachment-box">
                              <span>📎 <strong>Attached Document:</strong></span>
                              <a
                                href={`${API_BASE_URL}${t.media_file}`}
                                target="_blank"
                                rel="noreferrer"
                                className="media-download-link"
                              >
                                📥 View Attachment ({t.media_file.split('/').pop()})
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: ADMIN PORTAL - TICKETS MANAGEMENT */}
        {activeTab === 'escalations' && currentUser?.role === 'admin' && (
          <div className="tab-pane escalations-pane">
            <div className="tab-header-row">
              <div className="tab-header-left">
                <h2><Ticket size={22} className="tab-header-icon" /> Student Support Tickets</h2>
                <button
                  className={`refresh-btn ${refreshingEscalations ? 'is-refreshing' : ''}`}
                  onClick={handleRefreshEscalations}
                  disabled={refreshingEscalations}
                  title="Live Refresh Escalations"
                >
                  <RefreshCw size={15} className={refreshingEscalations ? 'spin' : ''} />
                  <span>{refreshingEscalations ? 'Refreshing...' : 'Refresh Status'}</span>
                </button>
              </div>
              <div className="filter-group">
                <Filter size={15} />
                <label>Filter Status: </label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="all">All Statuses</option>
                  <option value="open">Open</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            <p className="tab-desc">Logged in as Administrator <strong>VST</strong>. All student-confirmed academic tickets appear here. Update status, provide resolution notes, and attach documents.</p>

            {filteredTickets.length === 0 ? (
              <div className="empty-state">No tickets found matching the selected filter.</div>
            ) : (
              <div className="tickets-grid">
                {filteredTickets.map((t) => (
                  <div key={t.id || t.ticket_id} className={`ticket-card status-${t.status}`}>
                    <div className="ticket-card-header">
                      <span className="ticket-id">🎫 {t.id || t.ticket_id}</span>
                      <span className={`status-badge badge-${t.status}`}>{t.status.toUpperCase()}</span>
                    </div>

                    <div className="ticket-body">
                      <p><strong>Student Name:</strong> {t.student_name}</p>
                      <p><strong>Email:</strong> {t.email} | <strong>Mobile:</strong> {t.mobile}</p>
                      <p><strong>Subject & Topic:</strong> {t.subject} — {t.topic}</p>
                      <p><strong>Question:</strong> {t.student_question}</p>
                      <p><strong>Evidence / Notes:</strong> {t.evidence_summary || t.reason}</p>
                      <p className="ticket-meta">Created At: {new Date(t.created_at).toLocaleString()}</p>

                      {t.resolution_notes && (
                        <div className="resolution-box">
                          <strong>Admin Notes:</strong> {t.resolution_notes}
                          {t.media_file && (
                            <div className="attachment-tag">
                              📎 Attached: <a href={`${API_BASE_URL}${t.media_file}`} target="_blank" rel="noreferrer">View File</a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="ticket-actions">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setEditingTicket(t.id || t.ticket_id);
                          setNewStatus(t.status);
                          setResolutionNote(t.resolution_notes || '');
                          setAdminMediaUrl(t.media_file || null);
                        }}
                      >
                        ✉️ Update Status & Send Response
                      </button>
                    </div>

                    {editingTicket === (t.id || t.ticket_id) && (
                      <div className="edit-form">
                        <h4>Send Resolution & Email (Admin VST)</h4>

                        <div className="form-group">
                          <label>Update Query Status:</label>
                          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Response Notes for Student ({t.email}):</label>
                          <textarea
                            placeholder="Type resolution message for student..."
                            value={resolutionNote}
                            onChange={(e) => setResolutionNote(e.target.value)}
                            rows={3}
                          />
                        </div>

                        <div className="form-group">
                          <label>Attach Media File / Document (PDF, Image):</label>
                          <input type="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" onChange={handleAdminMediaUpload} />
                          {adminUploadStatus && <div className="admin-upload-sub">{adminUploadStatus}</div>}
                        </div>

                        <div className="edit-form-btns">
                          <button className="save-btn" onClick={() => handleUpdateTicket(t.id || t.ticket_id)}>
                            📩 Dispatch Response & Update Status ➔
                          </button>
                          <button className="cancel-btn" onClick={() => setEditingTicket(null)}>Cancel</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: ADMIN KNOWLEDGE HUB - STRICTLY ADMIN ONLY */}
        {activeTab === 'docs' && currentUser?.role === 'admin' && (
          <div className="tab-pane docs-pane">
            <div className="tab-header-row">
              <div className="tab-header-left">
                <h2><FolderOpen size={22} className="tab-header-icon" /> Knowledge Hub & Document Index</h2>
                <button
                  className={`refresh-btn ${refreshingAdminDocs ? 'is-refreshing' : ''}`}
                  onClick={handleRefreshAdminDocs}
                  disabled={refreshingAdminDocs}
                  title="Live Refresh Document Index"
                >
                  <RefreshCw size={15} className={refreshingAdminDocs ? 'spin' : ''} />
                  <span>{refreshingAdminDocs ? 'Refreshing...' : 'Refresh Status'}</span>
                </button>
              </div>
              <button className="reindex-btn" onClick={handleReindexAdminDocs}>
                <RefreshCw size={15} /> Re-index All Documents
              </button>
            </div>
            <p className="tab-desc">Upload, preview, delete, and inspect indexed documents powering the RAG retrieval engine.</p>

            <form className="upload-box" onSubmit={handleFileUpload}>
              <input type="file" accept=".txt,.pdf,.docx,.doc,.csv" onChange={(e) => setUploadFile(e.target.files[0])} />
              <button type="submit" className="upload-btn" disabled={!uploadFile}>
                📤 Upload & Ingest into RAG Store
              </button>
            </form>

            {uploadStatus && <div className="upload-status-msg">{uploadStatus}</div>}

            <div className="documents-list-card">
              <h3>📚 Ingested College Documents ({adminDocuments.length} files)</h3>
              {adminDocsLoading ? (
                <p>Loading document records...</p>
              ) : (
                <div className="admin-doc-table-wrapper">
                  <table className="admin-doc-table">
                    <thead>
                      <tr>
                        <th>Filename</th>
                        <th>Type</th>
                        <th>Size (KB)</th>
                        <th>Indexed Chunks</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminDocuments.map((doc) => (
                        <tr key={doc.filename}>
                          <td><strong>{doc.filename}</strong></td>
                          <td><code>{doc.extension}</code></td>
                          <td>{doc.size_kb} KB</td>
                          <td>{doc.chunk_count}</td>
                          <td>
                            <span className={`doc-status-badge ${doc.status === 'Indexed' ? 'badge-success' : 'badge-warning'}`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="doc-action-btns">
                            <button
                              className="preview-doc-btn"
                              onClick={async () => {
                                const res = await fetch(`${API_BASE_URL}/admin/documents/${doc.filename}/preview`);
                                if (res.ok) {
                                  const data = await res.json();
                                  setPreviewMaterialData({
                                    subject: "Admin Document Preview",
                                    code: doc.filename,
                                    title: doc.filename,
                                    content: data.content,
                                  });
                                  setShowMaterialPreviewModal(true);
                                }
                              }}
                            >
                              👁️ Preview
                            </button>
                            <button
                              className="delete-doc-btn"
                              onClick={() => handleDeleteAdminDoc(doc.filename)}
                            >
                              🗑️ Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
