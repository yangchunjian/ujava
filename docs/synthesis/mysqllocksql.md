---
title: MySQL死锁SQL
icon: laptop-code
category:
  - 设计高频
tag:
  - 高频

---

在MySQL中，死锁通常发生在多个事务相互占用对方需要的资源，导致每个事务都在等待其他事务释放资源时无法向前推进。

解决死锁问题通常需要调整事务的隔离级别、保持事务尽可能短、避免事务中的锁竞争、使用索引来加快查询速度，并确保应用程序能够处理事务回滚。

以下是一个简单的例子，演示如何通过索引来减少死锁的可能性：

假设有两个表 `orders` 和 `inventory`，以下SQL可能导致死锁：

```sql
-- 事务A
BEGIN;
UPDATE orders SET status = 'shipped' WHERE order_id = 100;
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 5;
COMMIT;
 
-- 事务B
BEGIN;
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 5;
UPDATE orders SET status = 'shipped' WHERE order_id = 100;
COMMIT;
```

为了减少死锁的风险，可以确保对于经常出现在一起的操作的字段建立索引：

```sql
-- 对order_id字段在orders表上建立索引
ALTER TABLE orders ADD INDEX (order_id);
 
-- 对product_id字段在inventory表上建立索引
ALTER TABLE inventory ADD INDEX (product_id);
```

索引可以帮助数据库优化查询，并且通常按顺序存储数据，减少了不同事务之间互相锁定对方所需资源的可能性。

此外，确保事务尽可能小，并尽快提交，也有助于减少死锁的发生。