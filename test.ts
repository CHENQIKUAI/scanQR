interface Foo {
    name: string;
    age: number
}

type a = Partial<Foo>

type R<T> = {
    [p in keyof T]-?: T[p]
}

