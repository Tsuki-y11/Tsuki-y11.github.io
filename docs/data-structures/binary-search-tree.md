\# 二叉搜索树（BST）



\## 基本概念

二叉搜索树是一种有序的二叉树，左子树所有节点值 \&lt; 根节点 \&lt; 右子树所有节点值。



\## 代码实现

```python

class TreeNode:

&nbsp;   def \_\_init\_\_(self, val=0):

&nbsp;       self.val = val

&nbsp;       self.left = None

&nbsp;       self.right = None



class BST:

&nbsp;   def insert(self, root, val):

&nbsp;       if not root:

&nbsp;           return TreeNode(val)

&nbsp;       if val \&lt; root.val:

&nbsp;           root.left = self.insert(root.left, val)

&nbsp;       else:

&nbsp;           root.right = self.insert(root.right, val)

&nbsp;       return root

