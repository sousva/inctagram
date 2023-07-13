import React from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {Button} from './Button'
import {withThemeDecorator} from '../../../../.storybook/withThemeDecorator'

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['docsPage'],
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'text', 'isIcon'],
            control: {type: 'radio'},
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
    render: () => <Button>Text</Button>,
    decorators: [withThemeDecorator],
}
export const DefaultButtonDisabled: Story = {
    args: {
        disabled: true,
    },
    render: args => <Button disabled={args.disabled}>Text</Button>,
    decorators: [withThemeDecorator],
}
export const OutlinedButton: Story = {
    args: {
        variant: 'outlined',
        disabled: false,
    },
    render: args => (
        <Button variant={args.variant} disabled={args.disabled}>
            Text
        </Button>
    ),
    decorators: [withThemeDecorator],
}
export const ContainedButton: Story = {
    args: {
        variant: 'contained',
        disabled: false,
    },
    render: args => (
        <Button variant={args.variant} disabled={args.disabled}>
            Text
        </Button>
    ),
    decorators: [withThemeDecorator],
}
export const IsIconButton: Story = {
    args: {
        variant: 'isIcon',
        disabled: false,
    },
    render: args => (
        <Button variant={args.variant} disabled={args.disabled}>
            Text
        </Button>
    ),
    decorators: [withThemeDecorator],
}
export const TextButton: Story = {
    args: {
        variant: 'text',
        disabled: false,
    },
    render: args => (
        <Button variant={args.variant} disabled={args.disabled}>
            Text
        </Button>
    ),
    decorators: [withThemeDecorator],
}
