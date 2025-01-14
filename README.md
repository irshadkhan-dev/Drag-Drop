# Drag && Drop

## Setup Instructions

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/irshadkhan-dev/Drag-Drop.git
   
2. Navigate to the project directory:   
   ```bash
   cd <project-directory>

3. Install dependencies using pnpm:
   ```bash
   pnpm install
   
4. Start the development server:
   ```bash
     pnpm run dev
## Technology Choices and Rationale

- **Vite**: Chosen for its blazing-fast development environment and optimized build process.
- **React**: Used for building the user interface due to its component-based architecture and widespread adoption.
- **TypeScript**: Ensures type safety and improves developer productivity by catching errors during development.
- **Tailwind CSS**: Simplifies styling with utility-first CSS classes, enabling rapid UI development.

### Custom Implementation

- The drag-and-drop functionality was built entirely without using external libraries. This decision was made to maintain control over the implementation and minimize dependencies.

## Known Limitations / Trade-offs

- **No Database Connection**: Currently, the project does not include a connected database. As a result, all data handling is limited to in-memory state management.
- **No Debouncing**: The drag-and-drop feature does not have debouncing implemented. This could lead to performance issues if integrated with a database in the future.

## Future Improvements

- **Improved Drag & Drop functionality**: By using well optimized libraries drag and drop can be more improved
- **Database Integration**: Connect the project to a database for persistent data storage.
- **Add Debouncing**: Implement debouncing to optimize performance during high-frequency events, such as drag-and-drop interactions with database calls.


