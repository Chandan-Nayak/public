---
title: Designing Data-Intensive Applications
date: 2025-09-20
tags: [books, distributed-systems, databases, architecture]
aliases:
  - /designing-data-intensive-applications
---

# Designing Data-Intensive Applications

**Author:** Martin Kleppmann  
**Finished:** September 20, 2025  
**Rating:** ⭐⭐⭐⭐⭐  
**Genre:** Technical

## Summary

Deep dive into the architecture and principles behind modern data systems. Covers everything from databases and caches to stream processing and batch processing. Essential reading for anyone working with distributed systems.

## Key Takeaways

1. **Reliability, Scalability, Maintainability** - The three main concerns of data systems
2. **CAP Theorem** - You can only have two of: Consistency, Availability, Partition Tolerance
3. **OLTP vs OLAP** - Online Transaction Processing vs Online Analytical Processing
4. **Replication patterns** - Single-leader, multi-leader, leaderless
5. **Partitioning strategies** - By key range or by hash of key
6. **Stream processing vs batch processing** - Real-time vs scheduled data processing
7. **Data consistency models** - Eventual consistency, strong consistency, causal consistency

## Favorite Quotes

> "Data outlives code."

> "A good abstraction can hide a great deal of implementation detail behind a clean, simple-to-understand façade."

## Personal Notes

Dense but incredibly valuable. Took 3 months to read properly. Key insights:
- Understanding trade-offs between consistency and availability
- Why distributed systems are hard (network delays, partial failures)
- Importance of idempotency in distributed systems
- How to think about data at scale

Applied learnings to redesign our caching layer at work.

## Chapters Worth Revisiting

- Chapter 5: Replication (leader-based, multi-leader, leaderless)
- Chapter 7: Transactions (ACID properties, isolation levels)
- Chapter 9: Consistency and Consensus (linearizability, eventual consistency)
- Chapter 11: Stream Processing (event logs, message brokers)

## Related
- [[clean-code]] - Code-level best practices
- [[the-phoenix-project]] - DevOps and system operations

---

⬅️ Back to [[index|All Books]]
