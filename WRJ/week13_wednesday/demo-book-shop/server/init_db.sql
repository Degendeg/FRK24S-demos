-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS react_nodejs_mysql_db;
USE react_nodejs_mysql_db;

-- Create the books table if it doesn't exist
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    `desc` TEXT,
    price DECIMAL(10,2) NOT NULL,
    cover VARCHAR(500) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert sample data
INSERT INTO books (title, `desc`, price, cover) VALUES
('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 12.99, 'https://example.com/gatsby.jpg'),
('1984', 'A novel by George Orwell', 15.50, 'https://example.com/1984.jpg');