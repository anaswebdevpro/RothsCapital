import React from 'react';
import { cn } from '../../lib/utils';

export function Container({ className, children, ...props }) {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
}

export function Section({ className, id, children, ...props }) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}
