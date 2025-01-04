export const startup = {
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "slug",
            type: "slug",
            options:{
                source: 'title'
            }
        },
        {
            name: "author",
            type: "reference",
            to: {
                type: 'author'
            }
        },
        {
            name: "views",
            type: "number",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "category",
            type: "string",
            validation: (Rule) => Rule.required().min(1).max(20).error("Please enter a category"),
        },
        {
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "pitch",
            type: "markdown"
        }
    ],
};
