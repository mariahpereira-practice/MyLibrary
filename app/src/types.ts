export interface Book {
    id: number;
    documentId: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    image?: {
        url: string;
    };
    autor: string;
};

export interface ResponseBooks {
    data: Book[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
};

export interface BookListProps {
    data?: ResponseBooks;
    isLoading: boolean;
    isError: boolean;
    searchText: string;
    page: number;
    setPage: (page: number) => void;
    totalPage?: number;
};

export interface ResponseSingleBook {
    data: Book;
}

export interface BookInfoProps {
    book: Book;
    onAddToCart?: () => void;
}