
const positions = [
  {
    company: 'Amazon Web Services (AWS)',
    position: 'Software Development Engineer — Elastic Container Registry (ECR)',
    link: 'https://aws.amazon.com/ecr/',
    daterange: 'February 2025 - Present',
    points: [
      'Architected and built a unified ECR async execution platform by integrating new AWS services and internal tooling to support image signing, replication, and scanning workflows, reducing new feature onboarding time by 75% while sustaining 1M+ TPS throughput.',
      'Designed and onboarded fairness-aware scheduling and adaptive retry mechanisms to handle burst traffic and evolving workload patterns under high concurrency.',
      'Implemented identity-based credential delegation using Forward Access Sessions and envelope encryption, enforcing least-privilege authorization for ECR Async actions by validating caller permissions before execution, preventing unauthorized operations while maintaining full auditability.',
      'Designed and implemented a deduplication and idempotency control mechanism for event-driven workflows, preventing redundant jobs triggered by overlapping image events, ensuring only a single execution per logical operation and reducing unnecessary compute and processing overhead.',
    ],
  },
  {
    company: 'Amazon Web Services (AWS)',
    position: 'Software Development Engineer — Simple Storage Service (S3)',
    link: 'https://aws.amazon.com/s3/',
    daterange: 'July 2021 - February 2025',
    points: [
      'Designed and implemented control-plane recovery workflows to detect degraded quorums and automatically trigger host replacement using lightweight deep health checks optimized for S3 request-path latency, eliminating 100% of manual operational effort and reducing incident detection time from hours to under 3 minutes.',
      'Automated deployment workload assignment and region build pipelines, saving 5+ engineering hours per deployment cycle and enabling continuous 24-hour patching cadence.',
    ],
  },
  {
    company: 'Amazon.com Inc',
    position: 'Software Development Engineer Intern',
    link: 'https://aws.amazon.com/',
    daterange: 'June 2020 - September 2020',
    points: [
      'Built real-time network monitoring dashboard for AWS data centers backed by an event-driven aggregation pipeline using DynamoDB Streams and Lambda, improving data retrieval performance by 60%, enabling visualization across 256k+ devices, and reducing operational debugging time by 30%.',
    ],
  },
];

export default positions;
