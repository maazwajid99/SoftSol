// src/pages/BlogParent.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Image imports
import Pool4 from "../assets/pool4.jpeg";
import Pool5 from "../assets/pool5.jpeg";
import Pool6 from "../assets/pool6.jpeg";
import Pool7 from "../assets/pool7.jpeg";
import Pool8 from "../assets/pool8.jpeg";
import Pool9 from "../assets/pool9.jpeg";
import Pool10 from "../assets/pool10.jpeg";
import Pool11 from "../assets/pool11.jpeg";
import Pool12 from "../assets/pool12.jpeg";
import Pool13 from "../assets/pool13.jpeg";

const blogPosts = [
  {
    id: "1",
    title: "How AI is Transforming the Pool Industry",
    excerpt: "Explore how artificial intelligence is automating pool cleaning, monitoring, and customer service in the industry.",
    imageUrl: Pool4,
    date: "July 6, 2025",
    author: "Ayesha Khan",
    category: "AI & Automation"
  },
  {
    id: "2",
    title: "AI-Powered Maintenance Scheduling",
    excerpt: "Learn how predictive AI models are optimizing pool maintenance schedules and reducing downtime.",
    imageUrl: Pool5,
    date: "July 1, 2025",
    author: "Dr. Imran Saeed",
    category: "Artificial Intelligence"
  },
  {
    id: "3",
    title: "Machine Learning for Water Quality Prediction",
    excerpt: "Discover how ML models analyze pool sensor data to forecast water quality and reduce chemical usage.",
    imageUrl: Pool6,
    date: "June 25, 2025",
    author: "Fatima Zahra",
    category: "Smart Technology"
  },
  {
    id: "4",
    title: "AI Chatbots for Pool Service Support",
    excerpt: "How businesses use AI chatbots to provide 24/7 customer assistance for pool care and troubleshooting.",
    imageUrl: Pool7,
    date: "June 10, 2025",
    author: "Ali Raza",
    category: "Customer Experience"
  },
  {
    id: "5",
    title: "AI vs Human Technicians: What’s the Future?",
    excerpt: "Will AI replace human technicians in pool management? We explore the pros and cons.",
    imageUrl: Pool8,
    date: "May 20, 2025",
    author: "Mehwish Alam",
    category: "AI Trends"
  },
  {
    id: "6",
    title: "Commercial Pool Projects",
    excerpt: "Explore design and construction techniques in commercial pool projects across urban centers.",
    imageUrl: Pool9,
    date: "June 15, 2023",
    author: "John Smith",
    category: "Business"
  },
  {
    id: "7",
    title: "Domestic Swimming Pools",
    excerpt: "Guidance on maintaining household pools with smart sensors and energy-saving systems.",
    imageUrl: Pool10,
    date: "July 22, 2023",
    author: "Sarah Johnson",
    category: "Maintenance"
  },
  {
    id: "8",
    title: "How AI is Revolutionizing Water Quality Monitoring",
    excerpt: "Learn how artificial intelligence is being used to automate pool water testing and ensure consistent safety standards.",
    imageUrl: Pool11,
    date: "June 28, 2025",
    author: "Zeeshan Yousuf",
    category: "AI in Industry"
  },
  {
    id: "9",
    title: "AI-Powered Smart Pools: The Future of Automation",
    excerpt: "Explore the rise of AI-integrated smart pools — from automated cleaning to predictive maintenance.",
    imageUrl: Pool12,
    date: "July 5, 2025",
    author: "Fatima Tariq",
    category: "Smart Tech"
  },
  {
    id: "10",
    title: "The Role of Data in Pool Industry Innovation",
    excerpt: "How big data and analytics are improving pool safety, service quality, and customer retention.",
    imageUrl: Pool13,
    date: "July 6, 2025",
    author: "Umar Farooq",
    category: "Data Science"
  }
];

const postsPerPage = 10;

export default function BlogParent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Wrapper>
      <div className="container-fluid blog-parent-container py-5 px-lg-5 px-xl-5 px-xxl-5">
        <h2 className="blog-parent-title-head text-center mb-4">Blog</h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <SearchBox>
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search Blog By Title..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </SearchBox>
          </div>
        </div>

        <div className="row blog-parent-div">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4 pt-4">
              <Link to={`/blog/${post.id}`} className="text-decoration-none">
                <div className="blog-parent-card h-100 shadow-sm">
                  <img
                    src={post.imageUrl}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="blog-parent-title">{post.title}</h5>
                    <p className="blog-parent-paragraph">{post.excerpt}</p>
                    <div className="mt-auto">
                      <small className="blog-parent-date-text">
                        {post.date} | {post.author} | {post.category}
                      </small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row justify-content-between pt-4">
          <div className="col-auto">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="btn btn-info text-white px-5 py-3"
            >
              Previous
            </button>
          </div>
          <div className="col-auto">
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="btn btn-info text-white px-5 py-3"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components
// Styled Components
const Wrapper = styled.div`
  .blog-parent-container {
    padding-top: 8% !important;
  }

  @media (max-width: 992px) {
    .blog-parent-container {
      padding-top: 110px;
    }
  }

  @media (max-width: 768px) {
    .blog-parent-container {
      padding-top: 100px;
    }
  }

  @media (max-width: 576px) {
    .blog-parent-container {
      padding-top: 90px;
    }
  }

  .blog-parent-title-head {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 36px;
    font-weight: 500;
  }

  .blog-parent-div {
    border-radius: 3%;
  }

  .blog-parent-title {
    color: #010412;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .blog-parent-paragraph {
    color: #4b5563;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1rem;
  }

  .blog-parent-date-text {
    color: #6b7280;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  .blog-parent-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #ffffff;
  }

  .blog-parent-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(48, 213, 200, 0.3);
  }

  .blog-parent-card img {
    transition: transform 0.4s ease;
  }

  .blog-parent-card:hover img {
    transform: scale(1.05);
  }

  .btn-info {
    background-color: #30d4c7;
    border-color: #30d4c7;
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    padding: 14px 28px;
    border-radius: 5px;
    transition: 0.3s;
  }

  .btn-info:hover {
    background-color: #00b894;
    box-shadow: 0 8px 25px rgba(48, 213, 200, 0.5);
    transform: translateY(-2px);
  }
`;

const SearchBox = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 14px 50px 14px 48px;
    border: none;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    color: #010412;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transition: 0.3s ease;
    outline: none;

    &::placeholder {
      color: #6b7280;
      font-size: 15px;
    }

    &:focus {
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    color: #6b7280;
    font-size: 18px;
  }
`;
