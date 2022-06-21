import { render, screen } from '@testing-library/react';
import App from './App';
import Search from './components/Search';
import FormAddTile from './components/FormAddTile';
import { DataContextProvider } from './context/DataProvider';
import userEvent from "@testing-library/user-event";

test('renders landing page and Search and Add button links', () => {
    render(<App />);
    const linkSearch = screen.getByRole("button", {name: /search/i});
    const linkAdd =  screen.getByRole("button", {name: /add/i});
    expect(linkSearch).toBeInTheDocument();
    expect(linkAdd).toBeInTheDocument();
});

test("should be able to search and display results", async () => {
    render(
        <DataContextProvider>
        <Search />
        </DataContextProvider>
    );
    const searchInput = screen.getByRole('textbox', {name: /title/i});
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "game");
    const myImage = screen.getByRole('img', {  name: /game on/i});
    expect(myImage).toBeInTheDocument();
})

test("should be able to show NO RESULTS if image is not found", async () => {
    render(
        <DataContextProvider>
        <Search />
        </DataContextProvider>
    );
    const searchInput = screen.getByRole('textbox', {name: /title/i});
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "ggg");
    const noResultsText = screen.getByText(/no results for your search/i);
    expect(noResultsText).toBeInTheDocument();
})

test("should be able to Add a Tile", async () => {
    render(
        <DataContextProvider>
        <FormAddTile />
        </DataContextProvider>
    );
    const addButton = screen.getByRole("button", {name: /add/i});
    expect(addButton).toBeDisabled();
    const titleInput = screen.getByRole('textbox', {  name: /title/i});
    const titleDescription = screen.getByRole('textbox', {  name: /description/i})
    const titleImagePath = screen.getByRole('textbox', {  name: /image path/i})
    userEvent.type(titleInput, "title example");
    userEvent.type(titleDescription, "description example");
    userEvent.type(titleImagePath, "https://images.unsplash.com/photo-1655789488528-080e569bd5f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    expect(addButton).not.toBeDisabled();
    userEvent.click(addButton);
})