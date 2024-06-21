// App.js

import React from 'react';
import { SubjectComponent } from './Components/SubjectComponent';

export function Computer() {
  const subjects = [
    {
      name: 'Engineering Mathematics',
      subtopics: [
        "Discrete Mathematics: Propositional and first order logic.",
        "Set Theory & Algebra: Groups, rings, fields, lattices, Boolean algebra.",
        "Linear Algebra: Matrix algebra, systems of linear equations, eigenvalues and eigenvectors.",
        "Calculus: Limit, continuity and differentiability, partial derivatives, maxima and minima, sequences and series, test for convergence.",
        "Probability: Random variables, expectation, conditional probability, mean, median, mode and standard deviation, probability distributions, Poisson, normal and binomial distributions.",
        "Numerical Methods: Roots of equations, interpolation, numerical integration, numerical solutions of linear and non-linear algebraic equations, finite difference methods, numerical solutions of ODEs and PDEs, numerical linear algebra."
      ]
    },
    {
      name: 'Digital Logic',
      subtopics: [
        "Boolean algebra.",
        "Combinational and sequential circuits.",
        "Minimization.",
        "Number representations and computer arithmetic (fixed and floating point)."
      ]
    },
    {
      name: 'Computer Organization and Architecture',
      subtopics: [
        "Digital logic circuits.",
        "Data representation.",
        "Computer arithmetic (fixed and floating point).",
        "Instruction set architecture.",
        "Processor organization and pipelining.",
        "Memory hierarchy: cache, main memory, and secondary storage."
      ]
    },
    {
      name: 'Programming and Data Structures',
      subtopics: [
        "Programming in C.",
        "Recursion.",
        "Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs."
      ]
    },
    {
      name: 'Algorithms',
      subtopics: [
        "Asymptotic notation.",
        "Analysis: insertion, merge, heap, quick sort.",
        "Dynamic programming.",
        "Greedy algorithms.",
        "Graph algorithms: BFS, DFS, shortest paths, minimum spanning trees.",
        "Searching, sorting, hashing."
      ]
    },
    {
      name: 'Theory of Computation',
      subtopics: [
        "Regular expressions and languages.",
        "Context-free languages, pumping lemma.",
        "Turing machines and undecidability."
      ]
    },
    {
      name: 'Compiler Design',
      subtopics: [
        "Lexical analysis, parsing, syntax-directed translation.",
        "Run-time environments.",
        "Intermediate code generation, optimization.",
        "Code generation."
      ]
    },
    {
      name: 'Operating System',
      subtopics: [
        "Processes, threads, inter-process communication.",
        "CPU scheduling, deadlock.",
        "Memory management and virtual memory.",
        "File systems."
      ]
    },
    {
      name: 'Databases',
      subtopics: [
        "ER-model, relational model, relational algebra.",
        "SQL: queries, constraints, triggers, views.",
        "File organization, indexing (e.g., B and B+ trees).",
        "Normalization."
      ]
    },
    {
      name: 'Computer Networks',
      subtopics: [
        "ISO/OSI stack, TCP/IP stack, protocols (e.g., TCP, UDP, IP, HTTP, HTTPS).",
        "LAN technologies (e.g., Ethernet).",
        "Network types, topologies (e.g., star, bus).",
        "Routing algorithms, congestion control."
      ]
    },
    {
      name: 'Software Engineering',
      subtopics: [
        "Software process models (e.g., waterfall, agile).",
        "Software requirements, design patterns, testing, maintenance."
      ]
    },
    {
      name: 'Web Technologies',
      subtopics: [
        "HTML, CSS, JavaScript.",
        "Web development frameworks (e.g., React, Angular, Vue).",
        "Backend technologies (e.g., Node.js, Django, Flask).",
        "APIs, RESTful services, microservices architecture."
      ]
    }
  ];

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-8 ml-8">Subjects</h1>
      <SubjectComponent subjects={subjects} />
      <div className='h-40'></div>
    </div>
  );
}


