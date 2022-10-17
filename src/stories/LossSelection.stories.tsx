import React from "react";
import { ComponentMeta } from '@storybook/react';
import HistorySelection, { HistorySelectionProps } from './HsitorySelect';

export default {
    component: HistorySelection,
    title: 'History Selection/HistorySelection',
} as ComponentMeta<typeof HistorySelection>;

function Template(args: HistorySelectionProps) {
    return (
        <HistorySelection
            {...args}
        />
    );
}

export const Main = Template.bind({});
Main.args = {
    color: 'primary',
};
