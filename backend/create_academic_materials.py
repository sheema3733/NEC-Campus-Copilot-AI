"""
Generates official R20/R23 syllabus-aligned academic study materials
and genuine PDF documents for DBMS (CS301) and Java (JAVA101) across all five units.
"""

import os
from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

BASE_DIR = Path(__file__).resolve().parent
DOCS_DIR = BASE_DIR / "data" / "docs"
PDF_DIR = BASE_DIR / "data" / "materials" / "pdf"

DOCS_DIR.mkdir(parents=True, exist_ok=True)
PDF_DIR.mkdir(parents=True, exist_ok=True)

MATERIALS = {
    "dbms_unit1": {
        "subject": "Database Management Systems (DBMS)",
        "code": "CS301",
        "unit": "Unit 1",
        "unit_num": 1,
        "title": "Introduction & ER Modeling",
        "syllabus_topics": "Database System Applications, Purpose of Database Systems, View of Data, Database Architecture (3-Schema: Physical, Conceptual, External), Data Independence. Entity-Relationship Model: Enterprise Schema, Entities, Relationships, Entity Sets, Weak Entity Sets, Keys (Primary, Foreign, Candidate, Super Key), ER Diagrams.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: CS301 DATABASE MANAGEMENT SYSTEMS
UNIT 1: INTRODUCTION & ER MODELING
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. PURPOSE OF DATABASE SYSTEMS & OVERVIEW:
A Database Management System (DBMS) is software designed to store, manage, and retrieve data efficiently, securely, and consistently. Traditional file processing systems suffered from data redundancy, inconsistency, difficulty accessing data, data isolation, integrity problems, atomicity issues, concurrent access anomalies, and security vulnerabilities. DBMS resolves these drawbacks by providing centralized control and unified data models.

2. THREE-SCHEMA DATABASE ARCHITECTURE:
The ANSI/SPARC 3-Schema Architecture separates user views from physical database storage:
- Physical (Internal) Level: Lowest level describing how data is physically stored on disk (block addresses, indices, B-Trees).
- Logical (Conceptual) Level: Describes what data is stored in the database and the relationships among data items without storage details.
- External (View) Level: Highest level describing end-user views. Different users see different customized views of the database.
Data Independence:
- Physical Data Independence: Capacity to modify internal schema without altering conceptual schema (e.g. changing file index).
- Logical Data Independence: Capacity to modify conceptual schema without altering external views (e.g. adding new attributes).

3. ENTITY-RELATIONSHIP (ER) DATA MODELING:
The ER model represents real-world enterprises conceptually:
- Entity: An object identifiable from other objects (e.g. Student with ID 101).
- Entity Set: Collection of entities of the same type (e.g. All Students).
- Attributes: Properties of entities. Types: Simple, Composite (Name -> First, Last), Single-valued, Multi-valued (Phone_Numbers), Derived (Age from DOB).
- Keys:
  * Super Key: A set of one or more attributes that uniquely identifies an entity.
  * Candidate Key: A minimal super key with no redundant attributes.
  * Primary Key: Candidate key chosen by the database designer as the principal identifier.
  * Foreign Key: Attribute referencing primary key of another relation to maintain referential integrity.
- Weak Entity Set: An entity set that does not have sufficient attributes to form a primary key. It relies on an identifying owner entity set and has a discriminator (partial key). Represented by double rectangle and double diamond.
- Relationships & Cardinalities: One-to-One (1:1), One-to-Many (1:N), Many-to-One (N:1), Many-to-Many (M:N).

4. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Explain the 3-Schema Architecture with a neat diagram and distinguish between Physical and Logical Data Independence.
Answer: 3-Schema architecture consists of External/View Level, Conceptual/Logical Level, and Internal/Physical Level. Physical data independence is easier to achieve because modifying physical indexes or storage paths does not affect queries at the conceptual level. Logical data independence is harder because modifying table schemas often requires altering application views.

Q2: What is a Weak Entity Set? Explain with a real-world example.
Answer: A weak entity set cannot be uniquely identified by its own attributes alone. Example: DEPENDENT of an EMPLOYEE. Dependent name is only unique per employee; the primary key is (Employee_ID, Dependent_Name).
""",
    },
    "dbms_unit2": {
        "subject": "Database Management Systems (DBMS)",
        "code": "CS301",
        "unit": "Unit 2",
        "unit_num": 2,
        "title": "Relational Model & SQL",
        "syllabus_topics": "Relational Model Concepts, Relational Algebra Operations (Select, Project, Join, Union, Set Difference, Cartesian Product). SQL Fundamentals: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT, WHERE, GROUP BY, HAVING, ORDER BY). Advanced SQL: Nested Subqueries, Joins (Inner, Left, Right, Full Outer), Views, Triggers.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: CS301 DATABASE MANAGEMENT SYSTEMS
UNIT 2: RELATIONAL MODEL & SQL
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. RELATIONAL MODEL CONCEPTS:
A relation is a mathematical table with columns (attributes) and rows (tuples).
- Domain: Set of permitted atomic values for an attribute.
- Degree: Number of attributes in a relation.
- Cardinality: Number of tuples in a relation.
- Integrity Constraints: Domain Constraints (valid types), Key Constraints (no duplicate primary keys), Entity Integrity (Primary key cannot contain NULL), Referential Integrity (Foreign key must reference existing primary key or be NULL).

2. RELATIONAL ALGEBRA OPERATIONS:
Relational algebra is a procedural query language consisting of fundamental operators:
- Selection (σ): Selects tuples that satisfy a given predicate. Syntax: σ_{department='CSE'}(Student).
- Projection (π): Selects specified columns and eliminates duplicate rows. Syntax: π_{name, gpa}(Student).
- Union (∪): Combines tuples from two union-compatible relations. Syntax: R ∪ S.
- Set Difference (-): Tuples in relation R but not in relation S. Syntax: R - S.
- Cartesian Product (×): Combines every tuple of R with every tuple of S. Syntax: R × S.
- Natural Join (⨝): Combines tuples from two relations having equal values on common attributes.
- Outer Joins: Left Outer Join (⟕), Right Outer Join (⟖), Full Outer Join (⟗) preserve non-matching tuples with NULLs.

3. STRUCTURED QUERY LANGUAGE (SQL):
SQL is the standard declarative query language for relational databases.
- DDL (Data Definition Language):
  CREATE TABLE Student (roll_no INT PRIMARY KEY, name VARCHAR(50) NOT NULL, dept VARCHAR(10), gpa DECIMAL(3,2));
  ALTER TABLE Student ADD COLUMN email VARCHAR(100);
  DROP TABLE Student;
- DML (Data Manipulation Language):
  INSERT INTO Student VALUES (101, 'Kiran', 'CSE', 8.9);
  UPDATE Student SET gpa = 9.2 WHERE roll_no = 101;
  DELETE FROM Student WHERE roll_no = 101;
- DQL (Data Query Language):
  SELECT dept, AVG(gpa) AS avg_gpa FROM Student GROUP BY dept HAVING AVG(gpa) >= 7.5 ORDER BY avg_gpa DESC;
- Joins in SQL:
  INNER JOIN: SELECT S.name, C.course_name FROM Student S INNER JOIN Enroll E ON S.roll_no = E.roll_no INNER JOIN Course C ON E.course_id = C.course_id;
  LEFT JOIN: Retains all rows from the left table even if no match exists in the right table.
- Subqueries:
  SELECT name FROM Student WHERE gpa > (SELECT AVG(gpa) FROM Student);
- Views & Triggers:
  CREATE VIEW TopStudents AS SELECT roll_no, name FROM Student WHERE gpa >= 9.0;
  Triggers execute automatically in response to INSERT, UPDATE, or DELETE events.

4. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Compare Relational Algebra and SQL. Explain Natural Join with an example.
Answer: Relational algebra is procedural (specifies how to retrieve data), whereas SQL is declarative (specifies what data to retrieve). Natural Join matches tuples with identical values on all shared attributes and removes redundant attribute copies.

Q2: Explain GROUP BY and HAVING clauses in SQL with an illustrative query.
Answer: GROUP BY aggregates rows sharing common column values into summary rows. HAVING filters aggregated groups based on aggregate functions (e.g., HAVING COUNT(*) > 5), whereas WHERE filters individual rows prior to grouping.
""",
    },
    "dbms_unit3": {
        "subject": "Database Management Systems (DBMS)",
        "code": "CS301",
        "unit": "Unit 3",
        "unit_num": 3,
        "title": "Normalization & Database Design",
        "syllabus_topics": "Relational Database Design, Functional Dependencies (FDs), Closure of Functional Dependencies, Attribute Closure Algorithm, Normal Forms: 1NF (First Normal Form), 2NF (Second Normal Form), 3NF (Third Normal Form), BCNF (Boyce-Codd Normal Form). Exam Topics: Lossless-Join Decomposition, Dependency Preservation, BCNF vs 3NF trade-offs.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: CS301 DATABASE MANAGEMENT SYSTEMS
UNIT 3: NORMALIZATION & DATABASE DESIGN
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. PURPOSE OF NORMALIZATION & ANOMALIES:
Normalization organizes database tables to minimize data redundancy and prevent update, insertion, and deletion anomalies.
- Insertion Anomaly: Inability to insert information without adding unrelated attributes (e.g. cannot add course without enrolled student).
- Deletion Anomaly: Unintended loss of crucial information upon deleting a record (e.g. deleting last student deletes course information).
- Update Anomaly: Inconsistent data when a duplicated value is changed in one row but not others.

2. FUNCTIONAL DEPENDENCY (FD) & CLOSURE ALGORITHM:
An FD X -> Y holds on relation R if whenever two tuples agree on attribute X, they must also agree on attribute Y.
- Armstrong's Axioms:
  1. Reflexivity: If Y ⊆ X, then X -> Y.
  2. Augmentation: If X -> Y, then XZ -> YZ.
  3. Transitivity: If X -> Y and Y -> Z, then X -> Z.
- Attribute Closure Algorithm (X+):
  Calculates all attributes functionally determined by attribute set X.
  Step 1: Set X+ = X.
  Step 2: For each FD A -> B in F, if A ⊆ X+, add B to X+.
  Step 3: Repeat until X+ does not change.
  If X+ contains all attributes of R, then X is a Super Key of R.

3. NORMAL FORMS (1NF to BCNF):
- First Normal Form (1NF): Every attribute domain contains only atomic (indivisible) values. No multi-valued or composite attributes.
- Second Normal Form (2NF): Must be in 1NF and have NO Partial Dependency (no non-prime attribute depends on a proper subset of any candidate key).
- Third Normal Form (3NF): Must be in 2NF and have NO Transitive Dependency. For every non-trivial FD X -> Y, either:
  * X is a Super Key, OR
  * Y is a Prime Attribute (member of some candidate key).
- Boyce-Codd Normal Form (BCNF): Strict 3NF form. For every non-trivial FD X -> Y:
  * X MUST BE A SUPER KEY.
  Every BCNF relation is in 3NF, but not all 3NF relations are in BCNF.

4. DECOMPOSITION PROPERTIES & TRADE-OFFS:
- Lossless-Join Decomposition: A decomposition of R into R1 and R2 is lossless if and only if R1 ∩ R2 -> R1 or R1 ∩ R2 -> R2 (common attributes form a superkey of at least one relation).
- Dependency Preservation: A decomposition preserves dependencies if the union of FDs of decomposed relations covers the original FD set.
- 3NF vs BCNF Trade-off: 3NF always guarantees both Lossless Join and Dependency Preservation. BCNF guarantees Lossless Join and eliminates all redundancy based on FDs, but cannot always preserve functional dependencies.

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Differentiate between 3NF and BCNF with a suitable example.
Answer: In 3NF, for X -> Y, Y can be a prime attribute even if X is not a superkey. In BCNF, X must strictly be a superkey. Example: Relation R(Student, Subject, Teacher) with FDs { (Student, Subject) -> Teacher, Teacher -> Subject }. Candidate keys are (Student, Subject) and (Student, Teacher). Teacher -> Subject violates BCNF because Teacher is not a superkey, but satisfies 3NF because Subject is a prime attribute.

Q2: Given R(A, B, C, D, E) and F = { A -> BC, CD -> E, B -> D, E -> A }. Find candidate keys and highest normal form.
Answer: Closure of A: A+ = {A, B, C, D, E}. A is candidate key. E+ = {E, A, B, C, D}. E is candidate key. BC+ = {B, C, D, E, A}. BC is candidate key. CD+ = {C, D, E, A, B}. CD is candidate key. B -> D violates 2NF because D is non-prime and depends on B (subset of key BC). Therefore, highest normal form is 1NF.
""",
    },
    "dbms_unit4": {
        "subject": "Database Management Systems (DBMS)",
        "code": "CS301",
        "unit": "Unit 4",
        "unit_num": 4,
        "title": "Transaction Processing & Concurrency Control",
        "syllabus_topics": "Transaction Concept, ACID Properties (Atomicity, Consistency, Isolation, Durability), Transaction States (Active, Partially Committed, Committed, Failed, Aborted), Serializability, Concurrency Control: Lock-Based Protocols (2PL - Two Phase Locking, Strict 2PL), Deadlock Handling, Timestamp-Based Protocols.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: CS301 DATABASE MANAGEMENT SYSTEMS
UNIT 4: TRANSACTION PROCESSING & CONCURRENCY CONTROL
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. TRANSACTION CONCEPTS & ACID PROPERTIES:
A transaction is a logical unit of database processing that includes one or more database access operations (read, write).
- ACID Properties:
  * Atomicity: All or nothing execution. If a transaction fails midway, all changes are rolled back (managed by Recovery Manager).
  * Consistency: Execution of a transaction in isolation preserves database integrity constraints.
  * Isolation: Concurrently executing transactions do not interfere with each other (managed by Concurrency Control Manager).
  * Durability: Once a transaction commits, its updates persist permanently even across system crashes.
- Transaction States: Active -> Partially Committed -> Committed; or Active / Partially Committed -> Failed -> Aborted.

2. SERIALIZABILITY & SCHEDULES:
- Schedule: Chronological execution sequence of operations from concurrent transactions.
- Serial Schedule: Transactions execute sequentially without interleaving.
- Conflict Serializability: A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations. Two operations conflict if they belong to different transactions, access the same data item, and at least one is a Write.
- Precedence (Serialization) Graph: A directed graph where transactions are nodes and directed edge Ti -> Tj exists if Ti performs an operation conflicting with an operation of Tj executed later. A schedule is conflict serializable IF AND ONLY IF the precedence graph is ACYCLIC.

3. CONCURRENCY CONTROL PROTOCOLS:
- Lock-Based Protocols:
  * Shared Lock (S): Acquired for Read operations. Multiple transactions can hold shared locks simultaneously.
  * Exclusive Lock (X): Acquired for Write operations. Only one transaction can hold an exclusive lock.
- Two-Phase Locking (2PL) Protocol:
  * Growing Phase: Transaction acquires locks; no locks are released.
  * Shrinking Phase: Transaction releases locks; no new locks can be acquired.
  * 2PL guarantees Conflict Serializability.
  * Strict 2PL: Releases all exclusive locks only after commit/abort. Prevents cascading rollbacks.
  * Rigorous 2PL: Releases all locks (shared and exclusive) only after commit.
- Timestamp-Based Ordering: Ensures transactions execute in order of their entry timestamp TS(Ti). Thomas' Write Rule allows obsolete writes to be ignored.

4. DEADLOCK HANDLING:
A deadlock occurs when two or more transactions are waiting indefinitely for locks held by each other (Wait-For Graph cycle).
- Deadlock Prevention: Wait-Die scheme (older transaction waits, younger dies), Wound-Wait scheme (older transaction wounds younger).
- Deadlock Detection: Periodically construct Wait-For Graph. If a cycle exists, select a victim transaction to abort and rollback.

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Explain 2PL Protocol and show how it ensures serializability but does not prevent deadlocks.
Answer: Two-Phase Locking ensures that all lock acquisitions precede any lock release. Since lock points can be ordered sequentially, the resulting precedence graph is acyclic, ensuring serializability. However, mutual waiting for locks held by other transactions in their growing phase can cause deadlocks (e.g. T1 locks A waiting for B; T2 locks B waiting for A).

Q2: Detail the ACID properties and explain how a database ensures each property.
Answer: Atomicity via Write-Ahead Logging & UNDO; Consistency via integrity constraint validation; Isolation via Concurrency Control (2PL / Timestamping); Durability via checkpoints and REDO log flushing to non-volatile disk.
""",
    },
    "dbms_unit5": {
        "subject": "Database Management Systems (DBMS)",
        "code": "CS301",
        "unit": "Unit 5",
        "unit_num": 5,
        "title": "Recovery Systems & Storage Indexing",
        "syllabus_topics": "Storage & Indexing: File Organization, Indexing Structures, B-Trees, B+ Trees, Static & Dynamic Hashing. Recovery Systems: Failure Classification, Log-Based Recovery, Write-Ahead Logging (WAL), Checkpoints, Shadow Paging.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: CS301 DATABASE MANAGEMENT SYSTEMS
UNIT 5: RECOVERY SYSTEMS & STORAGE INDEXING
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. RECOVERY SYSTEMS & FAILURE TYPES:
Failures include Transaction failures (logical errors, deadlocks), System crashes (power outage, OS crash, volatile RAM loss), and Disk failures (head crash, bad sectors).
- Recovery Objective: Maintain Atomicity and Durability using redundancy.
- Write-Ahead Logging (WAL):
  Log records containing transaction ID, data item, old value, and new value must be written to stable non-volatile storage BEFORE the corresponding database page is flushed to disk.
  Log format: <Ti, start>, <Ti, X, V_old, V_new>, <Ti, commit>, <Ti, abort>.

2. LOG-BASED RECOVERY TECHNIQUES:
- Deferred Database Modification:
  Updates are kept in buffer/log and written to disk only after transaction commits. No UNDO needed; only REDO required.
- Immediate Database Modification:
  Updates may be written to disk before commit. If failure occurs:
  * UNDO: Active transactions without <commit> are rolled back (restore old values).
  * REDO: Committed transactions with <commit> are reapplied (restore new values).
- Checkpointing:
  Periodically freezes database activity, flushes all modified buffer blocks and log records to disk, and writes <checkpoint L> to log. Dramatically reduces recovery time because transactions committed before checkpoint do not need REDO processing.
- Shadow Paging:
  Alternative to log-based recovery. Maintains two page tables: Current Page Table (active transactions) and Shadow Page Table (pointing to unmodified original database pages on disk). On crash, pointer simply reverts to shadow page table.

3. INDEXING STRUCTURES & STORAGE:
- File Organization: Heap file (unordered), Sequential file (ordered by search key), Hash file.
- Primary Index: Created on ordered key attribute.
- Secondary Index: Created on non-ordering or non-key attribute.
- B-Tree Index: Balanced search tree where each node contains keys and record pointers.
- B+ Tree Index:
  * All actual data pointers reside strictly in the Leaf Nodes.
  * Leaf nodes are linked as a doubly-linked list for highly efficient sequential range scans.
  * Internal nodes contain only search keys and child node pointers for fast O(log N) tree navigation.
  * Height remains balanced even after frequent insertions and deletions.
- Hashing: Static hashing uses fixed hash buckets; Dynamic hashing (Extendible Hashing) expands directory dynamically without full rehashing.

4. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Differentiate between B-Tree and B+ Tree indexing structures. Why are B+ Trees preferred in DBMS?
Answer: In B-Trees, keys and record pointers are stored in both internal and leaf nodes. In B+ Trees, internal nodes only store navigation keys, allowing higher fan-out (more keys per node block) and lower tree height. All leaf nodes are linked sequentially, enabling rapid range queries (e.g. BETWEEN 20 AND 50) without traversing internal nodes repeatedly.

Q2: Explain the checkpoint recovery mechanism with an illustrative log sequence.
Answer: When a system fails, the recovery algorithm scans backwards to the most recent checkpoint. Transactions active at or started after the checkpoint are placed into UNDO list if uncommitted, or REDO list if committed. Log records before the checkpoint are safely disregarded.
""",
    },
    "java_unit1": {
        "subject": "Java Programming & OOP",
        "code": "JAVA101",
        "unit": "Unit 1",
        "unit_num": 1,
        "title": "Java Fundamentals & OOP Concepts",
        "syllabus_topics": "History, JVM, JRE, JDK, Bytecode, Platform Independence, OOP Principles (Encapsulation, Abstraction, Inheritance, Polymorphism), Java Basics: Data Types, Variables, Operators, Control Statements (if-else, switch, loops), Arrays, Methods.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: JAVA101 JAVA PROGRAMMING & OOP
UNIT 1: JAVA FUNDAMENTALS & OOP CONCEPTS
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. JAVA ARCHITECTURE & PLATFORM INDEPENDENCE:
Java is an object-oriented, class-based, platform-independent language developed by James Gosling at Sun Microsystems.
- Java Architecture:
  * JDK (Java Development Kit): Full development environment containing compiler (javac), debugger, and JRE.
  * JRE (Java Runtime Environment): Provides libraries, JVM, and core components to execute compiled Java programs.
  * JVM (Java Virtual Machine): Abstract computing machine that executes compiled Java Bytecode (.class files).
  * Bytecode & "Write Once, Run Anywhere" (WORA): javac compiles Java source code (.java) into platform-neutral Bytecode (.class). The host OS-specific JVM interprets and executes bytecode using JIT (Just-In-Time) compilation.

2. CORE OBJECT-ORIENTED PROGRAMMING (OOP) PRINCIPLES:
- Encapsulation: Binding data (fields) and methods into a single class unit and hiding internal state via private access modifiers.
- Abstraction: Displaying only essential features to users while hiding background implementation details.
- Inheritance: Mechanism where child class inherits attributes and methods of parent class for code reusability.
- Polymorphism: Ability of an entity to take multiple forms (Compile-time overloading and Runtime overriding).

3. BASIC JAVA SYNTAX & CONTROL STATEMENTS:
- Primitive Data Types: byte (1B), short (2B), int (4B), long (8B), float (4B), double (8B), char (2B, Unicode), boolean.
- Operators: Arithmetic (+, -, *, /, %), Relational (==, !=, <, >), Logical (&&, ||, !), Bitwise, Ternary (? :).
- Control Structures:
  * Decision Making: if-else, nested-if, switch statement.
  * Loops: for, while, do-while, enhanced for-each loop.
  * Jump Statements: break, continue, return.

4. PRACTICAL CODE EXAMPLE:
```java
// Java Program demonstrating basic OOP encapsulation, control flow, and arrays
public class StudentGradeDemo {
    private String studentName;
    private int[] marks;

    public StudentGradeDemo(String name, int[] marks) {
        this.studentName = name;
        this.marks = marks;
    }

    public double calculateAverage() {
        int sum = 0;
        for (int mark : marks) {
            sum += mark;
        }
        return (double) sum / marks.length;
    }

    public void displayReport() {
        double avg = calculateAverage();
        char grade = (avg >= 90) ? 'A' : (avg >= 75) ? 'B' : (avg >= 50) ? 'C' : 'F';
        System.out.println("Student: " + studentName + " | Average: " + avg + " | Grade: " + grade);
    }

    public static void main(String[] args) {
        int[] scores = {85, 92, 78, 88, 95};
        StudentGradeDemo s = new StudentGradeDemo("Sita", scores);
        s.displayReport();
    }
}
```
Output:
Student: Sita | Average: 87.6 | Grade: B

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Explain JVM architecture and justify why Java is platform-independent.
Answer: JVM consists of ClassLoader, Bytecode Verifier, Memory Areas (Method Area, Heap, Java Stacks, PC Registers, Native Method Stacks), and Execution Engine (Interpreter + JIT Compiler). Java source code compiles into platform-independent Bytecode. Because different OS platforms run platform-specific JVM implementations that accept the identical bytecode, Java is platform-independent.

Q2: Differentiate between JDK, JRE, and JVM.
Answer: JVM is the runtime engine executing bytecode. JRE contains JVM plus standard class libraries. JDK is the software development kit containing JRE plus development tools (javac, javadoc, jar).
""",
    },
    "java_unit2": {
        "subject": "Java Programming & OOP",
        "code": "JAVA101",
        "unit": "Unit 2",
        "unit_num": 2,
        "title": "Classes, Objects & Inheritance",
        "syllabus_topics": "Class Definition, Object Creation, Constructor Overloading, 'this' keyword, Garbage Collection. Inheritance: Single, Multilevel, Hierarchical, Method Overriding, 'super' keyword, 'final' keyword. Interfaces & Abstract Classes, Multiple Inheritance via Interfaces, Default and Static methods in interfaces.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: JAVA101 JAVA PROGRAMMING & OOP
UNIT 2: CLASSES, OBJECTS & INHERITANCE
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. CLASSES, OBJECTS & CONSTRUCTORS:
- Class: Blueprint or template defining states (variables) and behaviors (methods).
- Object: Real-world instance of a class occupying heap memory.
- Constructors: Special methods invoked during object creation with new keyword. Same name as class, no return type.
  * Default Constructor, Parameterized Constructor, and Constructor Overloading.
- 'this' Keyword: Reference variable referring to current invoking object (resolves namespace collisions: this.id = id).
- Garbage Collection: Automatic memory management in JVM that destroys unreferenced heap objects via mark-and-sweep.

2. INHERITANCE IN JAVA:
Inheritance establishes an IS-A relationship between parent (superclass) and child (subclass) using extends keyword.
- Supported Types: Single Inheritance, Multilevel Inheritance, Hierarchical Inheritance.
- Multiple Inheritance of classes is prohibited in Java to avoid the Diamond Problem (ambiguity). It is achieved using Interfaces.
- Method Overriding: When child class defines a method with identical signature and return type as parent class. Represents Runtime (Dynamic Method Dispatch) Polymorphism.
- 'super' Keyword: Refers to immediate parent class (invokes parent constructor super(), accesses parent fields and methods).
- 'final' Keyword:
  * final variable: Constant value; cannot be reassigned.
  * final method: Cannot be overridden by child class.
  * final class: Cannot be inherited (extended).

3. ABSTRACT CLASSES VS INTERFACES:
- Abstract Class (abstract keyword): Can have abstract methods (no body) and concrete methods with state. Can have constructors.
- Interface (interface keyword): Contract of methods. All methods are public abstract by default. Since Java 8, interfaces can contain default and static methods. Since Java 9, private methods. Implemented with implements keyword.

4. PRACTICAL CODE EXAMPLE:
```java
// Java Program demonstrating Inheritance, Method Overriding, super, and Interfaces
interface Printable {
    void printDetails();
}

class Employee implements Printable {
    protected int empId;
    protected String name;

    public Employee(int empId, String name) {
        this.empId = empId;
        this.name = name;
    }

    public double calculateSalary() {
        return 30000.0;
    }

    @Override
    public void printDetails() {
        System.out.println("Employee ID: " + empId + ", Name: " + name);
    }
}

class Manager extends Employee {
    private double bonus;

    public Manager(int empId, String name, double bonus) {
        super(empId, name); // Call superclass constructor
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return super.calculateSalary() + bonus; // Method Overriding
    }

    @Override
    public void printDetails() {
        super.printDetails();
        System.out.println("Role: Manager | Total Salary: " + calculateSalary());
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Employee emp = new Manager(101, "Ravi Kumar", 25000.0); // Dynamic dispatch
        emp.printDetails();
    }
}
```
Output:
Employee ID: 101, Name: Ravi Kumar
Role: Manager | Total Salary: 55000.0

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Differentiate between Method Overloading and Method Overriding.
Answer: Overloading occurs in the same class with different parameters (compile-time polymorphism). Overriding occurs between superclass and subclass with identical signatures (runtime polymorphism). Return type alone is insufficient for overloading.

Q2: Compare Abstract Classes and Interfaces in Java.
Answer: Abstract classes can have instance variables and concrete methods, supporting single inheritance. Interfaces cannot hold instance state (only public static final constants) and allow multiple inheritance of type.
""",
    },
    "java_unit3": {
        "subject": "Java Programming & OOP",
        "code": "JAVA101",
        "unit": "Unit 3",
        "unit_num": 3,
        "title": "Exception Handling & Multithreading",
        "syllabus_topics": "Exception Handling: Try-Catch blocks, Multiple Catch, Nested Try, 'throw', 'throws', 'finally' block, Custom Exceptions. Multithreading: Thread Lifecycle (New, Runnable, Running, Blocked, Terminated), Thread Creation (extending Thread class, implementing Runnable), Synchronization, Inter-thread communication ('wait', 'notify'), Deadlocks.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: JAVA101 JAVA PROGRAMMING & OOP
UNIT 3: EXCEPTION HANDLING & MULTITHREADING
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. JAVA EXCEPTION HANDLING FRAMEWORK:
Exceptions are abnormal runtime conditions disrupting program flow.
- Throwable Hierarchy: Throwable -> Error (Out of Memory, StackOverflow) and Exception.
  * Checked Exceptions (Compile-time): Checked at compile time (IOException, SQLException, ClassNotFoundException).
  * Unchecked Exceptions (Runtime): Subclasses of RuntimeException (NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException).
- Exception Keywords:
  * try: Encloses code that may throw an exception.
  * catch: Handles specific exception type. Multiple catch blocks must order subclasses before superclasses.
  * finally: Always executes regardless of whether an exception occurred, handled, or unhandled (cleanup code).
  * throw: Explicitly throws an exception object: throw new ArithmeticException("Invalid");
  * throws: Declares exceptions in method signature that method may pass to caller.
- Custom Exceptions: User-defined classes extending Exception (checked) or RuntimeException (unchecked).

2. MULTITHREADING & THREAD LIFECYCLE:
A thread is a lightweight sub-process executing concurrently within the shared memory space of a process.
- Thread Lifecycle States:
  1. New: Created but start() not called.
  2. Runnable: Ready to run in OS thread pool.
  3. Running: CPU executing thread's run() method.
  4. Blocked/Waiting: Waiting for monitor lock or sleep/wait interval.
  5. Terminated (Dead): run() method completes execution.
- Creating Threads:
  * Extending Thread class and overriding run().
  * Implementing Runnable interface (preferred for supporting class inheritance).

3. SYNCHRONIZATION & INTER-THREAD COMMUNICATION:
- Thread Interference & Race Condition: Occurs when multiple threads modify shared mutable state concurrently.
- Synchronization: synchronized keyword locks object monitor, ensuring mutual exclusion.
- Inter-Thread Communication: Methods of Object class:
  * wait(): Releases object lock and waits until notified.
  * notify(): Wakes up a single thread waiting on this object.
  * notifyAll(): Wakes up all waiting threads.

4. PRACTICAL CODE EXAMPLE:
```java
// Java Program demonstrating Custom Exception and Multithreading with Runnable
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String msg) {
        super(msg);
    }
}

class BankAccount {
    private double balance = 5000.0;

    public synchronized void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Withdrawal of " + amount + " failed! Balance is " + balance);
        }
        balance -= amount;
        System.out.println(Thread.currentThread().getName() + " withdrew " + amount + ". Remaining: " + balance);
    }
}

public class ThreadExceptionDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        Runnable task = () -> {
            try {
                account.withdraw(3000.0);
            } catch (InsufficientFundsException e) {
                System.err.println(Thread.currentThread().getName() + " caught: " + e.getMessage());
            }
        };

        Thread t1 = new Thread(task, "ATM-1");
        Thread t2 = new Thread(task, "ATM-2");
        t1.start();
        t2.start();
    }
}
```
Output:
ATM-1 withdrew 3000.0. Remaining: 2000.0
ATM-2 caught: Withdrawal of 3000.0 failed! Balance is 2000.0

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Explain the purpose of 'finally' block and describe scenarios where 'finally' does not execute.
Answer: finally executes always to close resources like files or database connections. It does NOT execute only if System.exit(0) is called, JVM crashes, or fatal hardware/OS failure occurs.

Q2: Compare extending Thread class vs implementing Runnable interface.
Answer: Implementing Runnable is superior because Java prohibits multiple inheritance of classes (a class extending Thread cannot extend another class), promotes separation of concerns (task logic vs thread execution), and is compatible with modern Thread Pools (ExecutorService).
""",
    },
    "java_unit4": {
        "subject": "Java Programming & OOP",
        "code": "JAVA101",
        "unit": "Unit 4",
        "unit_num": 4,
        "title": "Java Collections Framework & I/O Streams",
        "syllabus_topics": "Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue, Iterator. File I/O Streams: Byte Streams (FileInputStream, FileOutputStream), Character Streams (FileReader, FileWriter), BufferedReader. Generics & Lambda Expressions.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: JAVA101 JAVA PROGRAMMING & OOP
UNIT 4: JAVA COLLECTIONS FRAMEWORK & I/O STREAMS
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. JAVA COLLECTIONS FRAMEWORK:
The Java Collections Framework provides standardized data structures and algorithms.
- Core Interfaces & Classes:
  * List: Ordered collection, allows duplicates.
    - ArrayList: Resizable array, fast random access O(1), slower insertions/deletions O(N).
    - LinkedList: Doubly linked list, fast insertions/deletions O(1), slower search O(N).
  * Set: Unordered collection, prohibits duplicate elements.
    - HashSet: Backed by hash table, O(1) basic operations, unordered.
    - TreeSet: Backed by Red-Black tree, sorted natural order, O(log N) operations.
  * Map: Key-Value pairs, unique keys.
    - HashMap: Hash table implementation, allows one null key, fast O(1).
    - TreeMap: Red-Black tree sorted by key, O(log N).
  * Queue: FIFO ordering (PriorityQueue, ArrayDeque).
  * Iterator: Unified cursor to traverse elements (hasNext(), next(), remove()).

2. GENERICS & LAMBDA EXPRESSIONS:
- Generics: Provides compile-time type safety and eliminates explicit typecasting: List<String> list = new ArrayList<>();
- Lambda Expressions: Anonymous functions providing concise implementation of Functional Interfaces (interfaces with exactly one abstract method): (a, b) -> a + b.

3. FILE I/O STREAMS:
- Byte Streams: Read/write raw 8-bit bytes (images, audio, binaries).
  * FileInputStream, FileOutputStream.
- Character Streams: Read/write 16-bit Unicode text characters.
  * FileReader, FileWriter, BufferedReader, BufferedWriter.
- Try-With-Resources: Automatically closes resources implementing AutoCloseable without explicit finally block.

4. PRACTICAL CODE EXAMPLE:
```java
// Java Program demonstrating HashMap, Collections, Lambdas, and Streams
import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        Map<String, Integer> studentMarks = new HashMap<>();
        studentMarks.put("Ananya", 92);
        studentMarks.put("Karthik", 78);
        studentMarks.put("Bhavani", 88);
        studentMarks.put("Deepak", 65);

        System.out.println("--- High Performing Students (>= 80) ---");
        studentMarks.entrySet().stream()
            .filter(entry -> entry.getValue() >= 80)
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue() + " marks"));
    }
}
```
Output:
--- High Performing Students (>= 80) ---
Ananya: 92 marks
Bhavani: 88 marks

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Differentiate between ArrayList and LinkedList. When should each be used?
Answer: ArrayList uses a contiguous dynamic array, providing fast O(1) indexed retrieval but O(N) element shifts during insertions/deletions. LinkedList uses doubly-linked nodes, providing O(1) insertions/removals once node is located but O(N) random access. Use ArrayList for read-heavy operations and LinkedList for frequent insertions/removals.

Q2: Differentiate between Byte Streams and Character Streams in Java File I/O.
Answer: Byte streams (InputStream/OutputStream) operate on 8-bit bytes, ideal for binary files like images and compiled files. Character streams (Reader/Writer) operate on 16-bit Unicode characters with automatic character-set encoding, preventing international character corruption in text files.
""",
    },
    "java_unit5": {
        "subject": "Java Programming & OOP",
        "code": "JAVA101",
        "unit": "Unit 5",
        "unit_num": 5,
        "title": "GUI Programming & Database Connectivity (JDBC)",
        "syllabus_topics": "Event Handling & Swing: JFrame, JPanel, JButton, JTextField, Layout Managers, Event Listeners. JDBC Architecture: JDBC Drivers (Types 1-4), Connection, Statement, PreparedStatement, ResultSet, CRUD operations with MySQL/PostgreSQL.",
        "content": """===============================================================================
NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)
DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
ACADEMIC STUDY MATERIAL: JAVA101 JAVA PROGRAMMING & OOP
UNIT 5: GUI PROGRAMMING & DATABASE CONNECTIVITY (JDBC)
Regulation: R20 / R23 Autonomous Syllabus | Credits: 4
===============================================================================

1. GUI PROGRAMMING WITH SWING & EVENT HANDLING:
Java Swing is a GUI toolkit providing lightweight, platform-independent GUI components built on top of AWT.
- Swing Components:
  * Top-Level Containers: JFrame, JDialog, JApplet.
  * Intermediate Containers: JPanel, JScrollPane.
  * Atomic Controls: JButton, JLabel, JTextField, JPasswordField, JCheckBox, JRadioButton.
- Layout Managers: FlowLayout (left-to-right), BorderLayout (North, South, East, West, Center), GridLayout (rows and columns).
- Delegation Event Model:
  * Event Source: Component generating event (e.g. JButton click).
  * Event Object: Encapsulates event details (e.g. ActionEvent).
  * Event Listener: Interface containing callback method (e.g. ActionListener with actionPerformed(ActionEvent e)).

2. JAVA DATABASE CONNECTIVITY (JDBC):
JDBC is a Java API that enables Java applications to execute SQL queries and manipulate relational databases.
- JDBC Driver Types:
  * Type 1: JDBC-ODBC Bridge Driver (obsolete).
  * Type 2: Native-API Driver (partly Java, requires vendor client libraries).
  * Type 3: Network-Protocol Driver (all Java, connects via middleware server).
  * Type 4: Thin Driver (100% pure Java, communicates directly with database socket; highly portable and industry standard).

3. JDBC CORE WORKFLOW & INTERFACES:
1. Load JDBC Driver: Class.forName("com.mysql.cj.jdbc.Driver");
2. Establish Connection: Connection con = DriverManager.getConnection(url, user, password);
3. Create Statement:
   * Statement: For simple static SQL queries.
   * PreparedStatement: Precompiled parameterized SQL query. Prevents SQL Injection attacks and improves performance.
   * CallableStatement: Used to execute stored procedures.
4. Execute Query:
   * executeQuery(): For SELECT statements, returns ResultSet.
   * executeUpdate(): For INSERT, UPDATE, DELETE, DDL, returns row count int.
5. Process ResultSet: Iterate with rs.next() and rs.getString(), rs.getInt().
6. Close Connections: con.close(), ps.close(), rs.close().

4. PRACTICAL CODE EXAMPLE:
```java
// Java Program demonstrating JDBC PreparedStatement CRUD operations
import java.sql.*;

public class JdbcStudentManager {
    private static final String URL = "jdbc:mysql://localhost:3306/necdb";
    private static final String USER = "root";
    private static final String PASS = "password";

    public static void insertStudent(int rollNo, String name, double gpa) {
        String sql = "INSERT INTO students (roll_no, name, gpa) VALUES (?, ?, ?)";
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            ps.setInt(1, rollNo);
            ps.setString(2, name);
            ps.setDouble(3, gpa);

            int rows = ps.executeUpdate();
            System.out.println("Inserted " + rows + " student record(s) successfully.");
        } catch (SQLException e) {
            System.err.println("JDBC Error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        System.out.println("Testing JDBC PreparedStatement execution.");
        // insertStudent(101, "Anil Kumar", 8.8);
    }
}
```

5. IMPORTANT EXAM QUESTIONS & ANSWERS:
Q1: Explain the steps involved in connecting a Java application to a database using JDBC.
Answer: 1. Load Driver Class (`Class.forName()`), 2. Create Connection (`DriverManager.getConnection()`), 3. Create PreparedStatement (`con.prepareStatement(sql)`), 4. Set parameters and execute query (`ps.executeUpdate()` / `ps.executeQuery()`), 5. Process ResultSet, 6. Close Connection in try-with-resources.

Q2: Why is PreparedStatement preferred over Statement in JDBC?
Answer: 1. PreparedStatement is precompiled by the database engine, offering faster execution when executed repeatedly with different parameters. 2. It automatically escapes input parameters, completely preventing SQL Injection security vulnerabilities.
""",
    },
}

def generate_pdf(key, data):
    pdf_path = PDF_DIR / f"{key}.pdf"
    doc = SimpleDocTemplate(
        str(pdf_path),
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontSize=16,
        leading=20,
        textColor=colors.HexColor('#1e3a8a'),
        alignment=1, # Center
        spaceAfter=6
    )
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#0369a1'),
        alignment=1,
        spaceAfter=12
    )
    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=10,
        spaceAfter=6
    )
    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=6
    )
    code_style = ParagraphStyle(
        'CodeSnippet',
        parent=styles['Code'],
        fontSize=7.5,
        leading=10,
        textColor=colors.HexColor('#0f172a'),
        backColor=colors.HexColor('#f1f5f9'),
        spaceBefore=4,
        spaceAfter=6
    )

    story = []
    story.append(Paragraph("NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)", title_style))
    story.append(Paragraph(f"Official Study Material • {data['subject']} ({data['code']}) • {data['unit']}: {data['title']}", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#2563eb'), spaceAfter=12))

    # Meta Table
    meta_data = [
        [Paragraph("<b>Course Code:</b>", body_style), Paragraph(data['code'], body_style),
         Paragraph("<b>Regulation:</b>", body_style), Paragraph("R20 / R23 Autonomous", body_style)],
        [Paragraph("<b>Subject:</b>", body_style), Paragraph(data['subject'], body_style),
         Paragraph("<b>Unit:</b>", body_style), Paragraph(f"{data['unit']} - {data['title']}", body_style)],
    ]
    t = Table(meta_data, colWidths=[80, 180, 80, 200])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t)
    story.append(Spacer(1, 14))

    # Add content paragraphs
    raw_lines = data['content'].split('\n')
    in_code = False
    code_lines = []

    for line in raw_lines:
        line_s = line.strip()
        if line_s.startswith("```"):
            if in_code:
                story.append(Paragraph("<br/>".join(code_lines), code_style))
                code_lines = []
                in_code = False
            else:
                in_code = True
            continue

        if in_code:
            code_lines.append(line.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
            continue

        if not line_s or line_s.startswith("==="):
            continue

        if line_s.startswith(('1. ', '2. ', '3. ', '4. ', '5. ')):
            story.append(Paragraph(f"<b>{line_s}</b>", heading_style))
        elif line_s.startswith('Q1:') or line_s.startswith('Q2:'):
            story.append(Paragraph(f"<b>{line_s}</b>", heading_style))
        else:
            safe_text = line_s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            story.append(Paragraph(safe_text, body_style))

    doc.build(story)
    print(f"Generated PDF: {pdf_path.name}")

def main():
    print("Generating Academic Materials for DBMS and Java Units 1-5...")
    for key, data in MATERIALS.items():
        # 1. Write text material to docs directory
        txt_path = DOCS_DIR / f"{key}_material.txt"
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(data["content"])
        print(f"Generated Text Doc: {txt_path.name}")

        # 2. Write PDF to materials/pdf
        generate_pdf(key, data)

    print("All 10 academic units successfully created and compiled to genuine PDFs!")

if __name__ == "__main__":
    main()
