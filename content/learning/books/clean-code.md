---
title: Clean Code
date: 2024-11-20
tags: [books, programming, software-engineering, clean-code]
aliases:
  - /clean-code
---

# Clean Code

**Author:** Robert C. Martin (Uncle Bob)  
**Finished:** November 20, 2024  
**Rating:** ⭐⭐⭐⭐⭐  
**Genre:** Technical

## Summary

A handbook of agile software craftsmanship with practical advice on writing clean, maintainable code. The book covers everything from naming conventions to error handling, with lots of real-world examples.

## Key Takeaways

1. **Meaningful names matter** - Names should reveal intent and be searchable
2. **Functions should do one thing** - Small, focused functions are easier to understand and test
3. **Comments are often a code smell** - Good code should be self-documenting
4. **The Boy Scout Rule** - Leave code cleaner than you found it
5. **Error handling is important** - Don't return null, use exceptions properly
6. **DRY principle** - Don't Repeat Yourself
7. **Testing is crucial** - Tests enable refactoring with confidence

## Favorite Quotes

> "Clean code is simple and direct. Clean code reads like well-written prose."

> "Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code."

> "You should name a variable using the same care with which you name a first-born child."

## Personal Notes

This book fundamentally changed how I write code. Started applying:
- Meaningful variable names (no more `x`, `temp`, `data`)
- Breaking down large functions into smaller, focused ones
- Writing tests first (TDD approach)
- Regular refactoring sessions

The "leave it cleaner" mindset has become second nature now.

## Code Examples Applied

```python
# Before
def process(d):
    # ... 50 lines of code
    return r

# After
def calculate_discount(order):
    base_discount = _get_base_discount(order)
    loyalty_bonus = _calculate_loyalty_bonus(order.customer)
    return base_discount + loyalty_bonus
```

## Related
- [[designing-data-intensive-applications]] - System-level clean architecture
- [[the-pragmatic-programmer]] - Broader software craftsmanship

---

⬅️ Back to [[index|All Books]]
