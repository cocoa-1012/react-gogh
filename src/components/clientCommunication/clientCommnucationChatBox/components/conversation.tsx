export const bot = {
    id: 0,
    name: 'Travel Agent',
    avatarUrl: "https://via.placeholder.com/24/800080/800080.png"
};

export const user = {
    id: 1,
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
};

export const conversation = [{
    author: bot,
    text: 'Hello, what kind of trip would you like to book?',
    suggestedActions: [{
        type: 'reply',
        value: 'Business trip'
    }, {
        type: 'reply',
        value: 'Leisure trip'
    }],
    timestamp: new Date('2018-02-27 21:00')
}, {
    author: user,
    text: 'Business trip',
    timestamp: new Date('2018-02-27 21:01')
}, {
    author: bot,
    text: `What destinations would you like to visit?`,
    timestamp: new Date('2018-02-27 21:01')
}, {
    author: user,
    text: `Exotic`,
    timestamp: new Date('2018-02-28 00:05')
}, {
    author: bot,
    text: `And the date you need to be there?`,
    timestamp: new Date('2018-02-28 00:05')
}, {
    author: user,
    text: `april 1`,
    timestamp: new Date('2018-02-28 00:15')
}, {
    author: bot,
    text: `What is the duration of your stay?`,
    suggestedActions: [{
        type: 'reply',
        value: '1 week'
    }, {
        type: 'reply',
        value: '2 weeks'
    }, {
        type: 'reply',
        value: '1 month'
    }],
    timestamp: new Date('2018-02-28 00:15')
}, {
    author: user,
    text: `3 days`,
    timestamp: new Date('2018-02-28 00:20')
}, {
    author: bot,
    text: `I've picked these hotels for you`,
    attachments: [{
        title: 'Mystique',
        contentType: 'hotel',
        thumb: 'https://demos.telerik.com/kendo-ui/content/chat/Mystique.png',
        site: 'http://mystique.gr/'
    }, {
        title: 'Rimondi',
        contentType: 'hotel',
        thumb: 'https://demos.telerik.com/kendo-ui/content/chat/Rimondi.png',
        site: 'http://www.hotelsrimondi.com/'
    }, {
        title: 'Amanzoe',
        contentType: 'hotel',
        thumb: 'https://demos.telerik.com/kendo-ui/content/chat/Amanzoe.png',
        site: 'https://www.aman.com/resorts/amanzoe'
    }],
    attachmentLayout: 'carousel',
    timestamp: new Date('2018-02-28 00:15')
}, {
    author: user,
    text: `Mystique`,
    timestamp: new Date('2018-02-28 00:20')
}, {
    author: bot,
    text: `Is this correct?`,
    suggestedActions: [{
        type: 'reply',
        value: 'Yes'
    }, {
        type: 'reply',
        value: 'No'
    }],
    attachments: [{
        contentType: 'text/plain',
        content: 'Arrival date: April 1, 2018; Departure date: April 3, 2018; Staying at Mystique.'
    }],
    timestamp: new Date('2018-02-28 00:35')
}, {
    author: user,
    text: `yeah`,
    timestamp: new Date('2018-02-28 00:40')
}, {
    author: bot,
    text: `Great. Your reservation number is #1234`,
    suggestedActions: [{
        type: 'reply',
        value: 'Book another trip'
    }, {
        type: 'reply',
        value: 'Make changes to the current trip'
    }, {
        type: 'reply',
        value: 'Make changes to a different trip'
    }],
    timestamp: new Date('2018-02-28 00:41')
}];