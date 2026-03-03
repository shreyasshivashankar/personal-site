
const positions = [
  {
    company: 'Amazon Web Services (AWS)',
    position: 'Software Development Engineer — Elastic Container Registry (ECR)',
    link: 'https://aws.amazon.com/ecr/',
    daterange: 'February 2025 - Present',
    points: [
      'Migrated disparate microservices for image replication, scanning, and lifecycle policies into a single event-driven asynchronous platform, reducing the time required to integrate new async features and workflows by 80%.',
      'Engineered a horizontally scaling job scheduler using SQS queues and Fargate worker threads. Implemented partition ownership via the DynamoDB Lock Client to dynamically scale throughput via shard counts. Tuned concurrency and backpressure mechanisms to maintain flat end-to-end job lifecycle times, successfully load-testing the architecture to absorb bursty traffic spikes of 1M+ TPS without latency degradation.',
      'Replaced legacy, permissive Service Linked Roles with a custom token-based authorization mechanism to prevent organizational policy bypasses. Designed the system to generate and persist Forward Access Session tokens in DynamoDB during core image actions, deliberately trading a 10% latency increase for a significantly hardened, strictly validated security posture.',
      'Built an Investigation Agent using the Strands SDK and Large Language Models to automate root-cause analysis for Severity Incident Management (SIM) tickets. Integrated a vector database to query CloudWatch logs, source code, and runbooks, cutting ticket resolution time by 80%.',
      'Mentored junior engineers on deploying MCP (Model Context Protocol) servers for context-aware debugging, accelerating onboarding and operational troubleshooting.',
    ],
  },
  {
    company: 'Amazon Web Services (AWS)',
    position: 'Software Development Engineer — Simple Storage Service (S3)',
    link: 'https://aws.amazon.com/s3/',
    daterange: 'July 2021 - February 2025',
    points: [
      'Redesigned host replacement workflows for an S3 metadata caching layer (managing 9-host quorums across 3 AZs) by replacing simplistic reachability pings with asynchronous "deep health checks."',
      'Prevented degraded hosts from blackholing traffic by prioritizing strict quorum correctness. This drove a 0.093% increase in overall system availability, effectively trading a 5-8% increase in heap usage and a ~3ms latency overhead for deterministic reliability.',
    ],
  },
  {
    company: 'Amazon.com Inc',
    position: 'Software Development Engineer Intern',
    link: 'https://aws.amazon.com/',
    daterange: 'June 2020 - September 2020',
    points: [
      'Built a custom D3.js dashboard for the network engineering team to visualize data center connectivity. Engineered the backend to aggregate state across 256+ network devices via concurrent API calls, achieving full data center load times of under one second.',
      'Eliminated time-series navigation latency by implementing background pre-fetching and caching from the landing page.',
    ],
  },
];

export default positions;
