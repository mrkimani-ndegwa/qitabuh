# QITABUH

Initial Notes

Create a simple UI that shows a list of books.
- Books are organised randomly as a simple rectangle that shows title and below category: foo
- OnClick is assumed that you want to rent a book and then off click means you don’t want to anymore.
- Onclick displays a simple input box for number of days
- Price has a simple UI at the bottom to show that:
        - Selected Books  —> 3
            - Title 1
            - Title 2
            - Title 3
        - Amount -> $90.00

TODO List
- Create server with tests
    - Simple BookStore class that receives arguments and then automates creation of the db
    - Models
        - Id
        - Title
- React 
    - BookComponent
    - BookList
    - WrapperComponent
    - InputDaysComponent
        - Validation.
        - Just a number
    - ReceiptComponent
        - Number of Books
        - Duration Taken
        - Amount Due
        - If there is nothing, emoji saying please pick a book and a price (Lol)
    - Helper to calculate the amount of books to be taken. It takes:
        - Books
        - Constant is the RATE
        - Duration
        - Return B * C * D

