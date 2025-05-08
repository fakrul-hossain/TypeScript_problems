# 🎯 TypeScript Interview Questions – Deep Dive

In this post, we’ll explore two essential concepts in TypeScript that commonly appear in interviews and real-world applications: the differences between **`interface` vs `type`**, and the powerful **`keyof`** keyword. Understanding these will give you a stronger grasp of how TypeScript enforces type safety and improves developer productivity.

---

## 📌 1. Interfaces vs Types in TypeScript

In TypeScript, both `interface` and `type` can be used to define the shape of objects, but they have subtle differences that can affect how you structure your code.

### ✅ Similarities

Both can be used for:

- Describing the shape of an object
- Extending other interfaces or types
- Supporting optional and readonly properties

```ts
interface Person {
  name: string;
  age: number;
}

type Animal = {
  name: string;
  age: number;
};
```
