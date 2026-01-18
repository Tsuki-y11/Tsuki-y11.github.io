\# 排序算法



\## 快速排序

```python

def quick\_sort(arr):

&nbsp;   if len(arr) \&lt;= 1:

&nbsp;       return arr

&nbsp;   pivot = arr\[len(arr)//2]

&nbsp;   left = \[x for x in arr if x \&lt; pivot]

&nbsp;   middle = \[x for x in arr if x == pivot]

&nbsp;   right = \[x for x in arr if x \&gt; pivot]

&nbsp;   return quick\_sort(left) + middle + quick\_sort(right)

