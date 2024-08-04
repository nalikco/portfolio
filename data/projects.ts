import type {Project} from "~/types/project";

export const projects: Project[] = [
    {
        name: 'Services marketplace',
        images: [],
        shortDescription: 'The client is looking for a marketer (project manager), then the marketer is looking for performers (freelancers) and creates tasks for them.',
        description: 'Backend development for a services marketplace.\n' +
            '\n' +
            'Stack:\n' +
            '- Nest.js\n' +
            '- Docker\n' +
            '- PostgreSQL\n' +
            '- websockets\n' +
            '\n' +
            'Project essence: the client is looking for a marketer (project manager), then the marketer is looking for performers (freelancers) and creates tasks for them. The task cannot be started until the client pays for it after agreeing on the price, conditions, etc. After the task is paid, the client\'s funds are held by T-Bank. Upon completion of the task, the client can either accept it (then the held funds are withdrawn to the performer), or send it for revision.\n' +
            '\n' +
            'In addition to the main functionality, a lot of work was done on integrations with external services for work:\n' +
            '- Analytics section (Yandex.Metrica, Yandex.Direct, topvisor)\n' +
            '- payments and payouts (T-Bank)\n' +
            '- Taxpayer Identification Number (INN) checks for NPF status (API from the Federal Tax Service)\n' +
            '- login by phone number via MTS Mobile ID\n' +
            '\n' +
            'Links, name and screenshots of the project will be in August after the launch, the frontend is currently being completed.',
    }, {
        name: 'Invoice Generator',
        images: [
            'invoice-generator-1',
            'invoice-generator-2',
            'invoice-generator-3',
        ],
        shortDescription: 'The application is designed to generate and manage invoices with the ability to export in PDF format.',
        description: 'The application is designed to generate and manage invoices with the ability to export in PDF format. Users can create and edit invoices, manage customer information and profile settings for transfers, tax rates and currencies.\n' +
            '\n' +
            'The main functionality includes customer management with the ability to create and edit customer data, as well as profile settings with the ability to set language parameters, tax rates and default currency. Users can select a client from the list to automatically fill in the data in the invoice, as well as set the language, tax rate and currency from the profile. The generation and editing of invoices with automatic calculation of the amount and taxes, as well as the ability to generate and download a PDF version of the invoice for sending or printing are implemented.\n' +
            '\n' +
            'The technology stack includes a backend on Laravel and a frontend on Next.js.\n' +
            '\n' +
            'The development features include integration with Laravel to create a powerful and reliable backend with the ability to manage customer data, profile settings and invoices. The frontend is developed on Next.js to create a fast and responsive interface that provides convenient management of invoices and clients. Additionally, functionality for generating and exporting invoices to PDF using Laravel and Next.js has been implemented.\n' +
            '\n' +
            'By agreement with the customer, I describe my experience neutrally, without disclosing confidential information of the customer or the project.',
    }, {
        name: 'Time Tracker',
        images: [
            'time-tracker-1',
            'time-tracker-2',
            'time-tracker-3',
            'time-tracker-4',
        ],
        shortDescription: 'Time tracker is designed to track time, similar to Clockify.',
        description: 'Time tracker is designed to track time, similar to Clockify. Users can start, end, and edit tracked time periods for different projects, as well as view reports to analyze time for different periods.\n' +
            '\n' +
            'The main functionality includes time tracking with the ability to start and end a track, change the start and end time, select a project, and specify a track name. There is a reporting page to review the total time values ​​for a week, month, and year.\n' +
            '\n' +
            'The technology stack consists of a Laravel backend and a React frontend using Inertia.js.\n' +
            '\n' +
            'Development features include developing a stable and scalable Laravel backend with time track, project, and user management. The React frontend with Inertia.js ensures fast and smooth application operation without a full page reload.\n' +
            '\n' +
            'Additionally, functionality has been implemented for convenient time tracking with the ability to select a project and specify a track name, a reporting page has been created for analyzing total time values ​​for different periods, as well as a focus on creating functionality similar to popular time trackers to meet user needs for time tracking.\n' +
            '\n' +
            'In agreement with the customer, I neutrally describe my experience without disclosing confidential information of the customer or the project.',
    }, {
        name: 'Managment system',
        images: [],
        shortDescription: 'The project features the development of a hierarchical structure with the ability to nest deeply.',
        description: 'The technology stack includes a Laravel backend, a React frontend, and a MySQL database.\n' +
            '\n' +
            'The project features the development of a hierarchical structure with the ability to nest deeply, the implementation of a privilege system for managing access to information, and the creation of an interactive interface for easy viewing and management of data.\n' +
            '\n' +
            'The experience gained includes a deep understanding of the principles of organizational structure and access control, experience working with Laravel to create a reliable and scalable backend, the use of React to create a dynamic and intuitive user interface, and working with MySQL to store and manage data in the project.\n' +
            '\n' +
            'The photo is taken for illustration. By agreement with the customer, I am describing my experience neutrally, without disclosing confidential information of the customer or the project.',
    }, {
        name: 'DieselReport',
        images: [
            'diesel-report-1',
            'diesel-report-2',
            'diesel-report-3',
            'diesel-report-4',
            'diesel-report-5',
            'diesel-report-6',
        ],
        shortDescription: 'A web application for precise fuel accounting with the ability to add fuel types, workers and equipment.',
        description: 'A web application for precise fuel accounting with the ability to add fuel types, workers and equipment. The application automatically keeps track of fuel consumption and receipt, calculates balances and provides analytics on fuel use. Main functionality:\n' +
            'Accounting for fuel types, workers and equipment:\n' +
            'Adding and editing data\n' +
            'Storing information about fuel, workers and equipment in the cache to optimize loading\n' +
            'Automatic accounting of fuel consumption and receipt:\n' +
            'Calculation of fuel balances\n' +
            'Calculation of consumption and receipt per day\n' +
            'Analytics on fuel use by various criteria (fuel type, worker, equipment, day)\n' +
            'Checking and confirming transactions:\n' +
            'Ability to mark expenses and receipts as verified for easy verification with documentation\n' +
            'Interface settings:\n' +
            'Choice of design theme (dark/light)\n' +
            'Technology stack:\n' +
            'Frontend: Vue.js (SPA)\n' +
            'Backend: Flask (Python)\n' +
            'Authentication: Tokens with expiration date\n' +
            'Development features:\n' +
            'Using Vue.js to create a dynamic and responsive user interface\n' +
            'Implementation of data loading optimization by caching information about fuel, workers and equipment\n' +
            'Creating a RESTful API for interaction between the frontend and the backend on Flask\n' +
            'Using tokens to authorize users with expiration dateExperience gained:\n' +
            'Working with complex accounting and analytics systems\n' +
            'Using caching to optimize web application performance\n' +
            'Developing a RESTful API on Flask to ensure interaction between the frontend and backend\n' +
            'Experience working with Vue.js to create a modern and intuitive user interface',
    }, {
        name: 'Digital Photo Album',
        images: [],
        shortDescription: 'The web application is an electronic photo album for different families and their members.',
        description: 'The web application is an electronic photo album for different families and their members. Users can view photo albums, and the administrator has the ability to manage the content by creating and editing families and their members.\n' +
            '\n' +
            'The functionality for the administrator includes managing families and family members, the ability to create and edit family data, upload multiple photos for each family, and accounting tables for reviewing and editing families and users. The administrator can create and edit user accounts, as well as change the password.\n' +
            '\n' +
            'Users can view available families in the electronic photo album, view information about the family and its members, and manage the family if they are a member of it. Users have a profile to view and edit their data.\n' +
            '\n' +
            'The technology stack includes a Laravel backend and a framework for interactivity - Livewire.\n' +
            '\n' +
            'Features of the development include the use of Laravel to create a stable and scalable backend with convenient data management, integration with Livewire for dynamic interactivity without a full page reload, implementation of functionality for uploading multiple photos and convenient management of families and their members, as well as the development of a user-friendly interface for viewing photo albums and managing families.\n' +
            '\n' +
            'Photo taken for illustration purposes. By agreement with the customer, I am describing my experience neutrally, without disclosing confidential information of the customer or the project.',
    }
];