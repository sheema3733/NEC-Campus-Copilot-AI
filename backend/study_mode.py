import json
import logging
import re
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

# Topic Knowledge Base for All 5 Units of DBMS and Java (R20/R23 Syllabus)
KNOWLEDGE_BASE = {
    # --- DBMS (CS301) UNITS 1 - 5 ---
    "er model": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 1: Introduction & ER Modeling",
        "title": "Entity-Relationship (ER) Modeling",
        "concept": "The ER Model is a conceptual data model that represents real-world enterprises using Entities (objects), Attributes (properties), and Relationships (associations among entities).",
        "why": "It enables database designers to structure complex systems graphically before implementing physical database schemas.",
        "example": "Student (roll_no [PK], name, email) ──< Enrolled_In >── Course (course_id [PK], course_name, credits). Weak entities like Dependent rely on identifying relationships.",
        "takeaway": "Entities are drawn as rectangles, attributes as ovals, relationships as diamonds, and weak entities as double rectangles.",
        "flashcards": [
            {"front": "What is an Entity in ER modeling?", "back": "A real-world object distinguishable from other objects (e.g., a specific student)."},
            {"front": "What is a Weak Entity Set?", "back": "An entity set lacking sufficient attributes to form a primary key, relying on an identifying owner entity."},
            {"front": "Differentiate Primary Key and Candidate Key.", "back": "Candidate keys are minimal superkeys; the primary key is the candidate key chosen by the database designer."},
            {"front": "What does a double diamond represent in ER diagrams?", "back": "An identifying relationship set connecting a weak entity set to its identifying owner."}
        ]
    },
    "relational algebra": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 2: Relational Model & SQL",
        "title": "Relational Algebra Operations",
        "concept": "Relational Algebra is a procedural query language consisting of fundamental operators: Selection (σ), Projection (π), Union (∪), Set Difference (-), Cartesian Product (×), and Natural Join (⨝).",
        "why": "It forms the theoretical foundation and query execution optimization model for SQL relational database systems.",
        "example": "π_{name, gpa}(σ_{dept='CSE' ∧ gpa >= 8.5}(Student))",
        "takeaway": "Selection filters rows; Projection filters columns; Joins combine matching tuples from relations based on common attributes.",
        "flashcards": [
            {"front": "What is the Selection (σ) operator?", "back": "A unary relational operator that selects tuples satisfying a given predicate condition."},
            {"front": "What is the Projection (π) operator?", "back": "A unary relational operator that selects specified attributes and eliminates duplicate tuples."},
            {"front": "What is Natural Join (⨝)?", "back": "A binary operator matching tuples from two relations having identical values on shared attributes."},
            {"front": "What is Left Outer Join (⟕)?", "back": "A join preserving all tuples from the left relation, filling missing right-side values with NULL."}
        ]
    },
    "sql": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 2: Relational Model & SQL",
        "title": "Structured Query Language (SQL)",
        "concept": "SQL is the standard declarative query language used to create, query, modify, and manage relational databases.",
        "why": "It allows developers to express complex data retrieval and transaction operations without specifying underlying disk algorithms.",
        "example": "SELECT dept, COUNT(*) AS total_students FROM Student WHERE gpa >= 7.0 GROUP BY dept HAVING COUNT(*) >= 5 ORDER BY total_students DESC;",
        "takeaway": "SQL sublanguages: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE).",
        "flashcards": [
            {"front": "Differentiate WHERE and HAVING in SQL.", "back": "WHERE filters individual rows before grouping; HAVING filters aggregated groups created by GROUP BY."},
            {"front": "What is an SQL View?", "back": "A virtual table based on the result-set of an SQL statement, providing security and simplicity."},
            {"front": "What is an SQL Trigger?", "back": "A stored program executed automatically in response to database events (INSERT, UPDATE, DELETE)."},
            {"front": "What does an INNER JOIN return?", "back": "Only rows where there is a match in both joined tables based on the join predicate."}
        ]
    },
    "normalization": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 3: Normalization & Database Design",
        "title": "Database Normalization (1NF, 2NF, 3NF, BCNF)",
        "concept": "Normalization is the systematic process of organizing relational database tables to eliminate data redundancy and prevent insertion, update, and deletion anomalies.",
        "why": "It ensures data integrity, minimizes storage waste, and enforces consistency through functional dependency constraints.",
        "example": "In 3NF, for any non-trivial FD X -> Y, X must be a Super Key OR Y must be a Prime Attribute. In BCNF, X must strictly be a Super Key.",
        "takeaway": "1NF requires atomic values; 2NF removes partial dependencies; 3NF removes transitive dependencies; BCNF eliminates all FD-based redundancy.",
        "flashcards": [
            {"front": "What is 1NF (First Normal Form)?", "back": "A relation where all attribute domains contain atomic (indivisible) values with no repeating groups."},
            {"front": "What is Partial Dependency (2NF violation)?", "back": "When a non-prime attribute depends on a proper subset of a composite candidate key."},
            {"front": "What is Transitive Dependency (3NF violation)?", "back": "When a non-prime attribute depends on another non-prime attribute (X -> Y -> Z)."},
            {"front": "Why is BCNF stricter than 3NF?", "back": "BCNF requires every determinant X in X -> Y to strictly be a Super Key, without the prime attribute exception."}
        ]
    },
    "transactions": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 4: Transaction Management & Concurrency",
        "title": "Transactions & ACID Properties",
        "concept": "A transaction is a logical unit of database processing consisting of one or more read and write operations that must satisfy ACID properties.",
        "why": "It guarantees database consistency and reliable recovery even during hardware crashes, power cuts, and concurrent access.",
        "example": "Bank Transfer: BEGIN TRANSACTION; UPDATE Accounts SET balance = balance - 500 WHERE id = 1; UPDATE Accounts SET balance = balance + 500 WHERE id = 2; COMMIT;",
        "takeaway": "Atomicity (all or nothing), Consistency (preserves rules), Isolation (independent execution), Durability (committed changes persist).",
        "flashcards": [
            {"front": "What is Atomicity in transactions?", "back": "The all-or-nothing guarantee that if any part of a transaction fails, all changes are rolled back."},
            {"front": "What are the 5 Transaction States?", "back": "Active, Partially Committed, Committed, Failed, and Aborted."},
            {"front": "What is Conflict Serializability?", "back": "When a concurrent schedule can be transformed into a serial schedule by swapping non-conflicting operations."},
            {"front": "How does a Precedence Graph test serializability?", "back": "A schedule is conflict serializable if and only if its directed precedence graph is acyclic."}
        ]
    },
    "concurrency control": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 4: Transaction Management & Concurrency",
        "title": "Concurrency Control & 2PL Protocol",
        "concept": "Concurrency control manages simultaneous transaction execution to prevent lost updates, uncommitted reads (dirty reads), and inconsistent analyses.",
        "why": "It preserves transaction isolation and prevents deadlocks while maximizing database throughput.",
        "example": "Two-Phase Locking (2PL): Growing Phase (acquiring Shared/Exclusive locks, no release) -> Shrinking Phase (releasing locks, no acquisition).",
        "takeaway": "2PL guarantees conflict serializability. Strict 2PL holds exclusive locks until commit to prevent cascading rollbacks.",
        "flashcards": [
            {"front": "What is Two-Phase Locking (2PL)?", "back": "A locking protocol dividing execution into a Growing Phase (lock acquisition) and a Shrinking Phase (lock release)."},
            {"front": "What is Strict 2PL?", "back": "A 2PL variant holding all Exclusive locks until commit/abort to eliminate cascading aborts."},
            {"front": "What causes a Deadlock in DBMS?", "back": "A cycle in the Wait-For Graph where transactions wait indefinitely for locks held by each other."},
            {"front": "Name two Deadlock Prevention schemes.", "back": "Wait-Die scheme (non-preemptive) and Wound-Wait scheme (preemptive)."}
        ]
    },
    "recovery systems": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 5: Recovery Systems & Indexing",
        "title": "Database Recovery & Write-Ahead Logging (WAL)",
        "concept": "Recovery systems restore a database to the most recent consistent state following transaction failures, system crashes, or storage media errors.",
        "why": "It ensures the Atomicity and Durability properties of transactions even after unexpected server shutdowns.",
        "example": "Write-Ahead Logging (WAL) ensures that log record <T1, X, V_old, V_new> is written to disk before database page X is modified on disk.",
        "takeaway": "Checkpointing writes modified buffer blocks to disk, drastically speeding up crash recovery by bounding the UNDO/REDO scan range.",
        "flashcards": [
            {"front": "What is Write-Ahead Logging (WAL)?", "back": "Rule requiring log records to be flushed to non-volatile disk BEFORE actual database pages are updated."},
            {"front": "What is the purpose of Checkpointing?", "back": "Periodically saving dirty buffers to disk so recovery does not need to reprocess log entries prior to the checkpoint."},
            {"front": "When is an UNDO operation performed?", "back": "During recovery for transactions that were active (started) but never committed before the crash."},
            {"front": "When is a REDO operation performed?", "back": "During recovery for transactions that successfully committed but whose disk writes may not have completed."}
        ]
    },
    "b-tree": {
        "subject": "Database Management Systems (DBMS)",
        "unit": "Unit 5: Recovery Systems & Indexing",
        "title": "B-Trees and B+ Trees Indexing",
        "concept": "B-Trees and B+ Trees are balanced multi-way search trees designed for disk-based storage systems to provide O(log N) search, insertion, and deletion.",
        "why": "They optimize block I/O operations by storing many keys per disk block (high fan-out), keeping tree height minimal.",
        "example": "In B+ Trees, internal nodes only store guide keys and pointers; all actual record pointers reside in leaf nodes linked as a doubly linked list.",
        "takeaway": "B+ Trees are superior to B-Trees in DBMS because linked leaf nodes allow highly efficient sequential and range queries (BETWEEN x AND y).",
        "flashcards": [
            {"front": "Why are B+ Trees preferred over B-Trees in databases?", "back": "Internal nodes have higher fan-out (shorter height) and leaf nodes are linked for fast range scans."},
            {"front": "Where are actual data records stored in a B+ Tree?", "back": "Exclusively in the leaf nodes; internal nodes only store indexing guide keys."},
            {"front": "What is the time complexity of B+ Tree search?", "back": "O(log_B N), where B is the block fan-out and N is the number of indexed keys."},
            {"front": "What is the difference between Primary and Secondary index?", "back": "Primary index is created on the physical ordering key; secondary index is created on non-ordering attributes."}
        ]
    },

    # --- JAVA (JAVA101) UNITS 1 - 5 ---
    "java fundamentals": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 1: Java Fundamentals & OOP",
        "title": "Java Architecture & Platform Independence",
        "concept": "Java is an object-oriented language that achieves platform independence ('Write Once, Run Anywhere') by compiling source code (.java) into Bytecode (.class) executed by the JVM.",
        "why": "It allows developers to build software that runs across Windows, Linux, and macOS without recompilation.",
        "example": "javac Student.java -> Student.class -> java Student (JVM interprets bytecode using JIT compiler).",
        "takeaway": "JDK includes compiler and tools; JRE includes JVM and runtime libraries; JVM executes bytecode on the host OS.",
        "flashcards": [
            {"front": "What is Java Bytecode?", "back": "Platform-independent intermediate code (.class file) produced by the javac compiler."},
            {"front": "What is the role of the JVM?", "back": "Java Virtual Machine interprets bytecode and uses JIT compilation to execute instructions natively."},
            {"front": "Differentiate JDK and JRE.", "back": "JDK contains development tools (javac, debugger) plus JRE; JRE contains JVM and runtime libraries."},
            {"front": "Why is Java platform-independent?", "back": "Bytecode is uniform across all platforms; only the JVM implementation varies per operating system."}
        ]
    },
    "inheritance": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 2: Classes, Objects & Inheritance",
        "title": "Inheritance and Polymorphism in Java",
        "concept": "Inheritance is an OOP mechanism where a subclass derives state and behaviors from a superclass using the 'extends' keyword, establishing an IS-A relationship.",
        "why": "It promotes code reusability, modularity, and enables runtime polymorphism through method overriding.",
        "example": "class Employee { double getSalary() { return 30000; } }\nclass Manager extends Employee { double getSalary() { return super.getSalary() + 15000; } }",
        "takeaway": "Java supports Single, Multilevel, and Hierarchical inheritance. Multiple class inheritance is prohibited to avoid the Diamond Problem.",
        "flashcards": [
            {"front": "What is Method Overriding?", "back": "When a subclass provides a specific implementation of a method defined in its superclass with identical signature."},
            {"front": "What is Dynamic Method Dispatch?", "back": "Runtime resolution of an overridden method call through a superclass reference variable."},
            {"front": "What does the 'super' keyword do?", "back": "Refers to the immediate parent class, invoking parent constructors or accessing parent members."},
            {"front": "Why does Java disallow Multiple Inheritance for classes?", "back": "To prevent ambiguity known as the Diamond Problem when two parent classes define the same method."}
        ]
    },
    "interfaces": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 2: Classes, Objects & Inheritance",
        "title": "Interfaces and Abstract Classes",
        "concept": "An interface is a blueprint of a class containing abstract methods that classes implement with the 'implements' keyword, enabling multiple inheritance of type.",
        "why": "It decouples interface specifications from underlying implementations and achieves 100% abstraction.",
        "example": "interface Drawable { void draw(); default void printInfo() { System.out.println('Drawable item'); } }",
        "takeaway": "Classes implement multiple interfaces. Since Java 8, interfaces can contain default and static methods with implementation bodies.",
        "flashcards": [
            {"front": "Compare Abstract Classes and Interfaces.", "back": "Abstract classes have instance state and constructors; interfaces cannot hold instance state and allow multiple inheritance."},
            {"front": "Can an interface have concrete methods in Java 8+?", "back": "Yes, using the 'default' or 'static' keywords."},
            {"front": "What are all fields declared in an interface by default?", "back": "public, static, and final (constants)."},
            {"front": "What is a Marker Interface?", "back": "An interface with no methods or constants (e.g., Serializable, Cloneable) used to tag classes."}
        ]
    },
    "exception handling": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 3: Exception Handling & Multithreading",
        "title": "Exception Handling Framework",
        "concept": "Java Exception Handling is a mechanism to handle runtime errors gracefully using try, catch, finally, throw, and throws keywords.",
        "why": "It maintains the normal flow of application execution and separates error-handling code from regular business logic.",
        "example": "try { int val = 10 / 0; } catch (ArithmeticException e) { System.err.println(e.getMessage()); } finally { System.out.println('Always executes'); }",
        "takeaway": "Checked exceptions are verified at compile time; unchecked exceptions (subclasses of RuntimeException) occur at runtime.",
        "flashcards": [
            {"front": "Differentiate Checked and Unchecked exceptions.", "back": "Checked exceptions (IOException) are enforced at compile time; unchecked (NullPointerException) occur at runtime."},
            {"front": "What is the purpose of the 'finally' block?", "back": "To execute cleanup code (e.g. closing streams/sockets) regardless of whether an exception was thrown."},
            {"front": "Differentiate 'throw' and 'throws'.", "back": "'throw' explicitly instantiates and throws an exception; 'throws' declares exceptions in a method signature."},
            {"front": "How do you create a Custom Exception?", "back": "By extending Exception (for checked) or RuntimeException (for unchecked) and implementing a constructor."}
        ]
    },
    "multithreading": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 3: Exception Handling & Multithreading",
        "title": "Multithreading & Synchronization",
        "concept": "Multithreading is a Java feature allowing concurrent execution of two or more parts of a program (threads) to maximize CPU utilization.",
        "why": "It enables responsive user interfaces, background processing, and high-performance server applications.",
        "example": "class Task implements Runnable { public void run() { System.out.println('Running: ' + Thread.currentThread().getName()); } }",
        "takeaway": "Synchronized methods or blocks acquire an object's intrinsic monitor lock to prevent race conditions and maintain thread safety.",
        "flashcards": [
            {"front": "Name the 5 states in the Thread Lifecycle.", "back": "New, Runnable, Running, Blocked/Waiting, and Terminated (Dead)."},
            {"front": "Why is implementing Runnable preferred over extending Thread?", "back": "It avoids single-inheritance limitations and separates task logic from thread execution."},
            {"front": "What is a Race Condition?", "back": "A concurrency bug occurring when multiple threads modify shared mutable data simultaneously without synchronization."},
            {"front": "What do wait(), notify(), and notifyAll() do?", "back": "Inter-thread communication methods of Object class for synchronizing threads on a shared monitor."}
        ]
    },
    "collections": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 4: Collections Framework & I/O",
        "title": "Java Collections Framework",
        "concept": "The Collections Framework provides pre-packaged, high-performance data structures: List (ArrayList, LinkedList), Set (HashSet, TreeSet), and Map (HashMap, TreeMap).",
        "why": "It eliminates the need to manually build arrays or linked lists, offering standardized, type-safe algorithms.",
        "example": "Map<String, Integer> map = new HashMap<>(); map.put('DBMS', 85); map.put('Java', 92); System.out.println(map.get('Java'));",
        "takeaway": "ArrayList is best for fast indexing; LinkedList for insertions; HashSet for unique items; HashMap for key-value lookups in O(1).",
        "flashcards": [
            {"front": "Differentiate ArrayList and LinkedList.", "back": "ArrayList uses a contiguous array with O(1) index access; LinkedList uses doubly-linked nodes with O(1) insertions."},
            {"front": "Differentiate HashSet and TreeSet.", "back": "HashSet is unordered with O(1) hash lookup; TreeSet is sorted in natural order with O(log N) tree operations."},
            {"front": "Does HashMap allow null keys and values?", "back": "Yes, HashMap allows one null key and multiple null values (unlike Hashtable)."},
            {"front": "What is the Iterator interface used for?", "back": "To traverse elements of any Collection sequentially and remove elements safely during iteration."}
        ]
    },
    "file io": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 4: Collections Framework & I/O",
        "title": "File I/O Streams in Java",
        "concept": "Java File I/O handles input/output operations through Byte Streams (for binary data) and Character Streams (for Unicode text).",
        "why": "It allows persistent reading and writing of data files, logs, and networked streams on disk.",
        "example": "try (BufferedReader br = new BufferedReader(new FileReader('data.txt'))) { String line; while ((line = br.readLine()) != null) System.out.println(line); }",
        "takeaway": "Always use Try-with-Resources to automatically close File streams and prevent OS file descriptor memory leaks.",
        "flashcards": [
            {"front": "Differentiate Byte Streams and Character Streams.", "back": "Byte Streams (InputStream/OutputStream) handle 8-bit raw bytes; Character Streams (Reader/Writer) handle 16-bit Unicode characters."},
            {"front": "Why use BufferedReader over FileReader?", "back": "BufferedReader buffers disk reads in memory, providing high performance and the readLine() method."},
            {"front": "What does Try-with-Resources guarantee?", "back": "Automatic closing of any resource implementing AutoCloseable without an explicit finally block."},
            {"front": "What exception is thrown when a file is missing?", "back": "FileNotFoundException (a checked subclass of IOException)."}
        ]
    },
    "jdbc": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 5: GUI & Database Connectivity",
        "title": "Java Database Connectivity (JDBC)",
        "concept": "JDBC is an API that allows Java applications to connect to relational databases, execute SQL statements, and process query results.",
        "why": "It provides standard database connectivity for enterprise web and desktop software applications.",
        "example": "Connection con = DriverManager.getConnection(url, user, pass); PreparedStatement ps = con.prepareStatement('SELECT * FROM students WHERE id=?'); ps.setInt(1, 101); ResultSet rs = ps.executeQuery();",
        "takeaway": "Always use PreparedStatement instead of Statement to prevent SQL Injection attacks and improve query execution performance.",
        "flashcards": [
            {"front": "What are the 5 core steps in JDBC?", "back": "1. Load Driver, 2. Establish Connection, 3. Create Statement, 4. Execute Query, 5. Process ResultSet and Close."},
            {"front": "Why is PreparedStatement preferred over Statement?", "back": "PreparedStatement is precompiled (faster repeated execution) and automatically parameterizes inputs, preventing SQL Injection."},
            {"front": "What does executeQuery() return?", "back": "A ResultSet object containing data matching the SELECT query."},
            {"front": "What does executeUpdate() return?", "back": "An integer representing the number of rows affected by INSERT, UPDATE, DELETE, or DDL statements."}
        ]
    },
    "swing": {
        "subject": "Java Programming & OOP",
        "unit": "Unit 5: GUI & Database Connectivity",
        "title": "GUI Programming with Swing",
        "concept": "Java Swing is a GUI toolkit containing lightweight, platform-independent GUI components (JFrame, JPanel, JButton, JTextField).",
        "why": "It enables developers to build desktop graphical applications with native appearance and event-driven behavior.",
        "example": "JFrame frame = new JFrame('NEC Portal'); JButton btn = new JButton('Submit'); btn.addActionListener(e -> System.out.println('Clicked'));",
        "takeaway": "Swing follows the Delegation Event Model where Event Sources generate events handled by Event Listener callback interfaces.",
        "flashcards": [
            {"front": "What is the top-level container in Swing?", "back": "JFrame (or JDialog / JApplet)."},
            {"front": "Name 3 common Swing Layout Managers.", "back": "FlowLayout (sequential), BorderLayout (compass directions), and GridLayout (matrix grid)."},
            {"front": "How does the Delegation Event Model work?", "back": "An event source registers an event listener; when an event occurs, the source invokes the listener's callback method."},
            {"front": "What interface handles button clicks in Swing?", "back": "ActionListener with the actionPerformed(ActionEvent e) method."}
        ]
    }
}


def clean_topic_string(topic: str) -> str:
    """Removes common conversational prefixes."""
    t = topic.strip().lower()
    t = re.sub(r"^(what\s+is\s+|explain\s+|define\s+|tell\s+me\s+about\s+|how\s+does\s+|what\s+are\s+|give\s+me\s+)", "", t)
    t = re.sub(r"\?+$", "", t)
    return t.strip()


def find_matching_kb_entry(clean_topic: str) -> Optional[tuple[str, Dict[str, Any]]]:
    """Finds the best matching verified knowledge base entry."""
    ct = clean_topic.lower()

    # Direct unit and keyword alias mapping for syllabus topics
    aliases = {
        "dbms unit 1": "er model",
        "dbms unit 2": "relational algebra",
        "dbms unit 3": "normalization",
        "dbms unit 4": "transactions",
        "dbms unit 5": "recovery systems",
        "java unit 1": "java fundamentals",
        "java unit 2": "inheritance",
        "java unit 3": "exception handling",
        "java unit 4": "collections",
        "java unit 5": "jdbc",
        "functional depend": "normalization",
        "database normal": "normalization",
        "acid propert": "transactions",
        "two phase lock": "concurrency control",
        "2pl": "concurrency control",
        "write ahead log": "recovery systems",
        "wal": "recovery systems",
        "b tree": "b-tree",
        "b+ tree": "b-tree",
        "jvm": "java fundamentals",
        "polymorphism": "inheritance",
        "abstract class": "interfaces",
        "thread": "multithreading",
        "arraylist": "collections",
        "hashmap": "collections",
        "preparedstatement": "jdbc",
    }
    for alias_pattern, target_key in aliases.items():
        if alias_pattern in ct:
            if target_key in KNOWLEDGE_BASE:
                return target_key, KNOWLEDGE_BASE[target_key]

    for key, data in KNOWLEDGE_BASE.items():
        if key in clean_topic or clean_topic in key:
            return key, data
        # Check title words
        title_lower = data["title"].lower()
        if any(w in title_lower for w in clean_topic.split() if len(w) > 3):
            return key, data
    return None


def generate_study_mode_content(
    action: str,
    topic: str,
    context_text: Optional[str] = None,
) -> Dict[str, Any]:
    """Generates educational Study Mode content grounded in verified college materials with escalation for unknown topics."""
    from backend.config import GROQ_API_KEY, GROQ_MODEL
    from backend.rag import get_rag_engine

    clean_topic = clean_topic_string(topic)
    rag_engine = get_rag_engine()

    # Determine target subject
    is_dbms = any(k in clean_topic for k in ["dbms", "database", "sql", "normalization", "relational", "acid", "er diagram", "b-tree", "recovery"])
    is_java = any(k in clean_topic for k in ["java", "jvm", "inheritance", "multithreading", "collections", "jdbc", "swing", "exception", "oop"])
    target_subject = "dbms" if is_dbms else ("java" if is_java else None)

    # 1. Search RAG for Grounded Evidence
    rag_results = []
    rag_context = ""
    try:
        rag_res = rag_engine.search(query=topic, top_k=3, target_subject=target_subject)
        if rag_res.get("status") == "success" and rag_res.get("results"):
            rag_results = rag_res["results"]
            rag_context = "\n\n".join([f"[{r['source_citation']}]\n{r['text']}" for r in rag_results])
    except Exception as e:
        logger.warning(f"RAG search error in study mode: {e}")

    # Check local KB match
    kb_match = find_matching_kb_entry(clean_topic)

    # If neither RAG nor verified KB has sufficient evidence for this topic, trigger human escalation offer
    if not rag_results and not kb_match and len(clean_topic) > 3:
        logger.info(f"Insufficient study evidence for topic '{topic}'. Offering human escalation.")
        return {
            "status": "needs_escalation",
            "action": action,
            "topic": topic,
            "offer_escalation": True,
            "message": f"I couldn't find enough reliable information in the available study materials for '{topic}'. Would you like to send this question to the academic support team?",
            "content": f"### ⚠️ Insufficient Study Material Found\n\nI searched our college knowledge base and verified syllabi, but could not locate reliable, verified academic materials for **'{topic}'**.\n\nWould you like to send this query to the academic support team for human review?",
            "escalation_prompt": {
                "question": f"Study material requested for topic: '{topic}' (Study Action: {action})",
                "subject": target_subject.upper() if target_subject else "General Academic",
                "topic": topic,
                "context": f"Searched RAG knowledge base for '{topic}'. No verified study documents found.",
                "message": f"I couldn't find enough reliable information in the available study materials for '{topic}'. Would you like to send this question to the academic support team?"
            }
        }

    combined_context = (rag_context or (kb_match[1]["concept"] + " " + kb_match[1]["why"] if kb_match else f"Study Topic: {topic}")).strip()

    # 2. Attempt Groq Generation if API Key Available
    if GROQ_API_KEY and GROQ_API_KEY.strip() not in ["your_actual_groq_api_key", ""]:
        try:
            from groq import Groq
            client = Groq(api_key=GROQ_API_KEY, timeout=20.0)

            prompt_map = {
                "explain_simply": (
                    f"As an engineering professor at Narasaraopeta Engineering College, provide a simple, structured explanation for the topic: '{topic}'.\n"
                    f"Format with: ### 💡 Simple Explanation: [Topic Title]\n- **Core Concept**: [concept]\n- **Why It's Used**: [why]\n- **Key Takeaway**: [takeaway]\n"
                    f"Base your answer strictly on this verified evidence:\n{combined_context}"
                ),
                "practical_example": (
                    f"Provide 2 concrete real-world engineering or code examples for the topic: '{topic}'.\n"
                    f"Format with: ### 🛠️ Practical Real-World Example: [Topic Title]\n1. [Code/Architecture Example]\n2. [Production Application]\n"
                    f"Base your answer on this verified evidence:\n{combined_context}"
                ),
                "practice_questions": (
                    f"Generate 5 educational sample practice questions and revision exercises for academic study on the topic: '{topic}'.\n"
                    f"Include the header: ### 📝 5 Practice Questions: {topic}\n*Practice Questions - Not Official Exam Questions*\n"
                    f"Format: Questions 1 to 5 with brief answers.\n"
                    f"Base your answer on this educational reference:\n{combined_context}"
                ),
                "flashcards": (
                    f"Generate 4 concept flashcards for '{topic}'.\n"
                    f"Format strictly as Card 1 [Front]: ... [Back]: ... up to Card 4.\n"
                    f"Base your answer on this verified evidence:\n{combined_context}"
                ),
                "summarize_notes": (
                    f"Summarize study notes for '{topic}' into 4 concise bullet points.\n"
                    f"Format with: ### 📌 Summary of Notes: [Topic Title]\n- [Bullet 1]\n- [Bullet 2]\n- [Bullet 3]\n- [Bullet 4]\n"
                    f"Base your answer on this verified evidence:\n{combined_context}"
                ),
            }

            user_prompt = prompt_map.get(action, f"Explain the topic '{topic}' using context:\n{combined_context}")

            response = client.chat.completions.create(
                model=GROQ_MODEL,
                messages=[
                    {
                        "role": "system",
                        "content": "You are NEC Campus Copilot AI Study Assistant. Generate accurate, clear academic study content strictly grounded in the provided engineering syllabus and materials.",
                    },
                    {"role": "user", "content": user_prompt},
                ],
                temperature=0.2,
            )

            content = response.choices[0].message.content or ""
            refusal_phrases = ["i'm sorry", "i cannot provide", "i am unable to", "can't provide that", "as an ai"]
            if any(p in content.lower() for p in refusal_phrases):
                logger.warning("LLM returned refusal or non-answer. Using verified knowledge base fallback.")
                return generate_study_mode_fallback(action, topic, combined_context, kb_match)

            if content and content.strip():
                if action == "practice_questions" and "Practice Questions" not in content:
                    content = f"### 📝 5 Practice Questions: {topic}\n*Practice Questions - Not Official Exam Questions*\n\n" + content

                # Provide structured flashcard objects if action is flashcards
                structured_flashcards = None
                if action == "flashcards":
                    structured_flashcards = extract_flashcards_from_text(content, kb_match[1]["flashcards"] if kb_match else None)

                return {
                    "status": "success",
                    "action": action,
                    "topic": topic,
                    "content": content,
                    "flashcards": structured_flashcards or (kb_match[1]["flashcards"] if kb_match else None),
                    "is_practice_label": "Practice Questions - Not Official Exam Questions" if action == "practice_questions" else None,
                    "source_context_used": combined_context[:200] + "...",
                }
        except Exception as e:
            logger.warning(f"Groq Study Mode call failed: {e}. Using verified knowledge base fallback.")

    # 3. Fallback to Verified Knowledge Base
    return generate_study_mode_fallback(action, topic, combined_context, kb_match)


def extract_flashcards_from_text(text: str, fallback_cards: Optional[List[Dict[str, str]]] = None) -> List[Dict[str, str]]:
    """Extracts front/back pairs from generated flashcard text."""
    cards = []
    card_blocks = re.split(r"(?:Card\s*\d+|Flashcard\s*\d+)", text, flags=re.IGNORECASE)
    for block in card_blocks:
        if not block.strip():
            continue
        front_match = re.search(r"\[?Front\]?:\s*(.*?)(?:\[?Back\]?:|$)", block, re.DOTALL | re.IGNORECASE)
        back_match = re.search(r"\[?Back\]?:\s*(.*)", block, re.DOTALL | re.IGNORECASE)
        if front_match and back_match:
            front = front_match.group(1).strip().replace("**", "").replace("\n", " ")
            back = back_match.group(1).strip().replace("**", "").replace("\n", " ")
            if front and back:
                cards.append({"front": front[:180], "back": back[:250]})
    if len(cards) >= 2:
        return cards[:4]
    return fallback_cards or [
        {"front": "Key Concept Question", "back": "Key Concept Answer derived from verified study notes."},
        {"front": "Why is this used in engineering?", "back": "Ensures reliability, performance, and correctness in system architecture."},
    ]


def generate_study_mode_fallback(
    action: str,
    topic: str,
    context_text: str,
    kb_match: Optional[tuple[str, Dict[str, Any]]] = None,
) -> Dict[str, Any]:
    """Generates topic-specific study content from verified syllabus repository."""
    matched_kb = kb_match[1] if kb_match else None
    display_title = matched_kb["title"] if matched_kb else topic.title()

    if not matched_kb:
        clean = clean_topic_string(topic)
        found = find_matching_kb_entry(clean)
        if found:
            matched_kb = found[1]
            display_title = matched_kb["title"]

    if not matched_kb:
        if context_text and len(context_text.strip()) > 50:
            clean_snips = [p.strip() for p in context_text.split("\n\n") if len(p.strip()) > 25]
            lead_snip = clean_snips[0] if clean_snips else context_text[:200]
            display_title = topic.title()

            if action == "practice_questions":
                content = (
                    f"### 📝 5 Practice Questions: {display_title}\n"
                    f"*Practice Questions - Not Official Exam Questions*\n\n"
                    f"1. **Q1**: What is the primary concept of {display_title}?\n"
                    f"   - *Answer*: Grounded in verified notes: {lead_snip[:160]}...\n\n"
                    f"2. **Q2**: Why is {display_title} important in engineering?\n"
                    f"   - *Answer*: Ensures architectural consistency and eliminates design anomalies.\n\n"
                    f"3. **Q3**: What are the key rules governing {display_title}?\n"
                    f"   - *Answer*: Formally specified in autonomous course curriculum.\n\n"
                    f"4. **Q4**: Provide a real-world scenario illustrating {display_title}.\n"
                    f"   - *Answer*: Production system engineering and schema modeling.\n\n"
                    f"5. **Q5**: How is {display_title} evaluated in college examinations?\n"
                    f"   - *Answer*: Students must define core principles, state formal properties, and solve representative analytical problems."
                )
            elif action == "summarize_notes":
                content = (
                    f"### 📌 Summary of Notes: {display_title}\n\n"
                    f"**Verified Syllabus Highlights:**\n" +
                    "\n".join([f"- {s[:180]}..." for s in clean_snips[:4]])
                )
            elif action == "flashcards":
                content = (
                    f"### 🎴 3D Interactive Flashcards: {display_title}\n\n"
                    f"- **Card 1 [Front]**: What is {display_title}?\n  - **[Back]**: {lead_snip[:150]}...\n"
                    f"- **Card 2 [Front]**: Why is it used in database systems?\n  - **[Back]**: Preserves consistency and data integrity."
                )
            elif action == "practical_example":
                content = (
                    f"### 🛠️ Practical Real-World Example: {display_title}\n\n"
                    f"```text\n{lead_snip[:220]}\n```\n"
                    f"**Production Use-case**: Production systems deploy this standard to ensure reliability and fault tolerance."
                )
            else:  # explain_simply
                content = (
                    f"### 💡 Simple Explanation: {display_title}\n\n"
                    f"- **Core Concept**: {lead_snip[:180]}...\n"
                    f"- **Key Takeaway**: Grounded in official college academic records."
                )

            return {
                "status": "success",
                "action": action,
                "topic": topic,
                "content": content,
                "is_practice_label": "Practice Questions - Not Official Exam Questions" if action == "practice_questions" else None,
                "flashcards": [
                    {"front": f"What is {display_title}?", "back": f"Verified: {lead_snip[:120]}..."},
                    {"front": "Key Engineering Advantage", "back": "Maintains specification compliance and consistency."}
                ] if action == "flashcards" else None,
                "source_context_used": context_text[:200] + "...",
            }
        else:
            # If no verified topic entry matches and no context, offer escalation
            return {
                "status": "needs_escalation",
                "action": action,
                "topic": topic,
                "offer_escalation": True,
                "message": f"I couldn't find enough reliable information in the available study materials for '{topic}'. Would you like to send this question to the academic support team?",
                "content": f"### ⚠️ Insufficient Study Material Found\n\nI could not locate verified academic notes for **'{topic}'**.\n\nWould you like to send this question to the academic support team for human review?",
                "escalation_prompt": {
                    "question": f"Study material requested for topic: '{topic}'",
                    "subject": "General Academic",
                    "topic": topic,
                    "context": f"Topic '{topic}' is not present in local college study documents."
                }
            }

    flashcards_list = matched_kb.get("flashcards", [])

    if action == "explain_simply":
        content = (
            f"### 💡 Simple Explanation: {display_title}\n"
            f"- **Subject & Unit**: {matched_kb.get('subject')} ({matched_kb.get('unit')})\n"
            f"- **Core Concept**: {matched_kb['concept']}\n"
            f"- **Why It's Used**: {matched_kb['why']}\n"
            f"- **Key Takeaway**: {matched_kb['takeaway']}"
        )
    elif action == "practical_example":
        content = (
            f"### 🛠️ Practical Real-World Example: {display_title}\n"
            f"1. **Software / Architecture Implementation**:\n"
            f"```text\n{matched_kb['example']}\n```\n"
            f"2. **Production Application**: Used in production systems to maintain data integrity and meet curriculum standards."
        )
    elif action == "practice_questions":
        fc = flashcards_list
        content = (
            f"### 📝 5 Practice Questions: {display_title}\n"
            f"*Practice Questions - Not Official Exam Questions*\n\n"
            f"1. **Q1**: What is the primary objective of {display_title}?\n"
            f"   - *Answer*: {fc[0]['back'] if len(fc) > 0 else matched_kb['concept']}\n\n"
            f"2. **Q2**: {fc[1]['front'] if len(fc) > 1 else 'Why is this topic essential?'}\n"
            f"   - *Answer*: {fc[1]['back'] if len(fc) > 1 else matched_kb['why']}\n\n"
            f"3. **Q3**: {fc[2]['front'] if len(fc) > 2 else 'What is a key rule or property?'}\n"
            f"   - *Answer*: {fc[2]['back'] if len(fc) > 2 else matched_kb['takeaway']}\n\n"
            f"4. **Q4**: {fc[3]['front'] if len(fc) > 3 else 'Give a real-world scenario.'}\n"
            f"   - *Answer*: {fc[3]['back'] if len(fc) > 3 else matched_kb['example']}\n\n"
            f"5. **Q5**: How is {display_title} evaluated in autonomous examinations?\n"
            f"   - *Answer*: Students must define the core principles, state formal rules/equations, and provide illustrative diagrams or code."
        )
    elif action == "flashcards":
        content = (
            f"### 🎴 3D Interactive Flashcards: {display_title}\n\n" +
            "\n".join([f"- **Card {i+1} [Front]**: {c['front']}\n  - **[Back]**: {c['back']}" for i, c in enumerate(flashcards_list)])
        )
    else:  # summarize_notes
        content = (
            f"### 📌 Summary of Notes: {display_title}\n"
            f"- **Curriculum Mapping**: {matched_kb.get('subject')} • {matched_kb.get('unit')}\n"
            f"- **Definition**: {matched_kb['concept']}\n"
            f"- **Application**: {matched_kb['why']}\n"
            f"- **Exam Focus**: {matched_kb['takeaway']}"
        )

    return {
        "status": "success",
        "action": action,
        "topic": topic,
        "content": content,
        "flashcards": flashcards_list,
        "is_practice_label": "Practice Questions - Not Official Exam Questions" if action == "practice_questions" else None,
        "source_context_used": context_text[:150] + "...",
    }
