// 1. Зворотній порядок строки:
//Головна рекурсія:

function reverseString(s) {
    if (s.length === 0) return;
    reverseString(s.slice(1));
    process.stdout.write(s[0]);
}

// Приклад виклику:
reverseString("tiger");


//Хвостова рекурсія:
function reverseStringTail(s, idx = 0) {
    if (idx === s.length) return;
    reverseStringTail(s, idx + 1);
    process.stdout.write(s[idx]);
}

// Приклад виклику:
reverseStringTail("tiger");


//2. Поміняти місцями кожні два сусідні вузли у зв'язаному списку:
//Головна рекурсія:


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    if (!head || !head.next) return head;
    let first = head;
    let second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second;
}
// Створення тестового списку [1, 2, 3, 4] 
let list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);

// Функція для виведення списку

function printList(head) {
    if (!head) return;
    console.log(head.val);
    printList(head.next);
}

// Виклик функції для зміни пар узлів та виведення результату

let swappedList = swapPairs(list);
printList(swappedList);


//Хвостова рекурсія:


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairsTail(head, prev = null) {
    if (!head || !head.next) return head;
    let first = head;
    let second = head.next;
    first.next = second.next;
    second.next = first;
    if (prev) prev.next = second;
    swapPairsTail(first.next, first);
    return second;
}

// Створення тестового списку [1, 2, 3, 4] 
let list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);

// Функція для виведення списку

function printList(head) {
    if (!head) return;
    console.log(head.val);
    printList(head.next);
}

// Виклик функції для зміни пар узлів та виведення результату

let swappedList = swapPairsTail(list);
printList(swappedList);



//3. Числа Фібоначчі:
//Головна рекурсія:

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Приклад виклику:
let fib = fibonacci(3);
console.log(fib);


//Хвостова рекурсія:
function fibonacciTail(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciTail(n - 1, b, a + b);
}

// Приклад виклику:
let fib4 = fibonacciTail(4);
console.log(fib4);



// 4. Унікальні комбінації для підняття по сходах:
//Головна рекурсія

function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n >= -1 && n <= 45) {
        return climbStairs(n - 1) + climbStairs(n - 2);
    } else {
        throw new Error("n повинна бути між -1 та 45");
    }
}

// Приклад виклику:
let ways1 = climbStairs(3);
console.log(ways1);

//Хвостова рекурсія

function climbStairsTail(n, a = 1, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    if (n >= -1 && n <= 45) {
        return climbStairsTail(n - 1, b, a + b);
    } else {
        throw new Error("n повинна бути між -1 та 45");
    }
}

// Приклад виклику:

let ways2 = climbStairsTail(3);
console.log(ways2);


//5. Піднесення до ступеня:
//Головна рекурсія:  

function power(x, n) {
    if (n === 0) return 1;
    if (n > 0) {
        if (x === 0 || n < 0) {
            throw new Error("Either x is not zero or n < 0.");
        }
        if (x < -100 || x > 100 || n < -Math.pow(2, 31) || n > Math.pow(2, 31) - 1) {
            throw new Error("The provided values are out of bounds.");
        }
        let result = 1;
        for (let i = 0; i < Math.abs(n); i++) {
            result *= x;
            if (result < -Math.pow(10, 4) || result > Math.pow(10, 4)) {
                throw new Error("The provided values are out of bounds.");
            }
        }
        return n > 0 ? result : 1 / result;
    } else {
        return 1 / power(x, -n);
    }
}

// Приклад виклику:
let result = power(2, -2);
console.log(result);


//Хвостова рекурсія

function powerTail(x, n, res = 1) {
    if (n === 0) return res;
    if (n > 0) {
        if (x === 0 || n < 0) {
            throw new Error("Either x is not zero or n > 0.");
        }
        if (x < -100 || x > 100 || n < -Math.pow(2, 31) || n > Math.pow(2, 31) - 1) {
            throw new Error("The provided values are out of bounds.");
        }
        let result = res * x;
        if (result < -Math.pow(10, 4) || result > Math.pow(10, 4)) {
            throw new Error("Result is out of bounds.");
        }
        return powerTail(x, n - 1, result);
    } else {
        return powerTail(x, n + 1, res / x);
    }
}

// Приклад виклику:
let result2 = powerTail(2, -2);
console.log(result2);
