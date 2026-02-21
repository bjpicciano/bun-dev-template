import { describe, expect, it } from 'bun:test';

import { cn } from './utils';

describe('cn', () => {
	it('merges class names and resolves Tailwind conflicts', () => {
		expect(cn('px-2', 'px-4', { 'text-sm': true, hidden: false })).toBe('px-4 text-sm');
	});
});
