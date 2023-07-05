# noemdek
Two tasks: 
- A company requires you to build a functional scheduling page for its transport team that allows the manager to see drivers'/vehicles' schedules at a
glance.
- A company requires you to build a useful quotation page for its oil & gas
operations team to aid their processes.

# Tools, Frameworks, and Packages
Node.js, Express.js, Bcrypt, Multer, Winston, Joi, Mongoose, MongoDB, JWT, AWS-S3 bucket e.t.c

# LINKS
- API-Doc: https://documenter.getpostman.com/view/16602053/2s93zCaMLV
- deployed baseURL: https://noemdek.onrender.com/api/v1/

# ARCHITECTURE
- I used the layered architecture for the codebase which allows us to have separation of concerns(modules) i.e the data logic being separated from the business logic

# WHY MongoDB?
Task A: Building a scheduling page for the transport team

- Flexible data model: MongoDB's document-based structure allows you to store and manage driver and vehicle schedules with varying fields and structures. You can easily add or modify schedule information without impacting the overall schema, making it adaptable to changing requirements.
- Easy querying and filtering: MongoDB's rich querying capabilities enable you to retrieve and filter schedules based on different criteria such as driver names, dates, time slots, or any other relevant parameters. This allows the manager to quickly view and analyze the schedule at a glance.
- Scalability: As the transport team grows and handles more drivers and vehicles, MongoDB's ability to scale horizontally will be beneficial. You can distribute the data across multiple servers or clusters to accommodate the increasing workload and ensure smooth performance.

Task B: Building a quotation page for the oil & gas operations team

- Dynamic data storage: With MongoDB, you can easily handle the dynamic nature of quotation information. Each quotation can have different fields and structures based on the specific requirements of the operations team. MongoDB's flexibility allows you to store and manage this data without strict schema constraints.
- Aggregation and analysis: MongoDB's aggregation pipeline enables powerful data manipulation and analysis. You can perform calculations, aggregations, and transformations on quotation data to generate insights or perform statistical operations, aiding the oil & gas operations team in their processes.
- Indexing for performance: MongoDB allows you to create indexes on specific fields, enhancing the performance of queries executed on those fields. This can improve the quotation page's response time, particularly when dealing with large volumes of quotations.
- Scalability: As the operations team deals with more quotations over time, MongoDB's ability to scale horizontally becomes valuable. It can handle the growing volume of data and ensure efficient storage and retrieval of quotations.
In both tasks, MongoDB's flexibility, scalability, querying capabilities, and integration with Node.js will enable you to build efficient and responsive applications that meet the specific needs of the transport team's scheduling page and the oil & gas operations team's quotation page.

# ISSUES/Challenge
- There was no clear definition of data types for the input fields of the Figma-image provided, so as to know if a field is to take strings or numbers e.t.c
