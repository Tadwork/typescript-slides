### Documentation

```typescript

interface AnimationOptions {
    deltaX: number;
    deltaY: number;
    easing: string; // Can be "ease-in", "ease-out", "ease-in-out"
}

declare class UIElement {
    animate(options: AnimationOptions): void;
}



```

<div class="fragment highlight-red">
    <div class="fragment">
        <ul>
            <li>this is error prone because the easing type can be mistyped</li>
            <li>the developer must consult the documentation for each `easing` type</li>
        </ul>
    </div>
</div>