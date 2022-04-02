import React from "react";
import animation from "../Assets/animation.png";
import basic_html from "../Assets/basic_html.png";
import blog_project from "../Assets/blog_project.png";
import digital_clock from "../Assets/digital_clock.png";
import gif_loader from "../Assets/gif loader.png";
import responsive_website from "../Assets/responsive_website.png";
import student_management from "../Assets/student_management.png";
import todo_app from "../Assets/todo_app.png";

const Portfolio = () => {
    return(
        <div className="portfolio_main_container">
        <div className="portfolio_heading">
            My Portfolio
        </div>
        <div className="portfolio_content">
            <a href="https://brahmaraj.github.io/backtracking/"><img className="project_image" src={basic_html} alt="html_basic"/></a>
            <a href="https://brahmaraj.github.io/css5/index3.html"><img className="project_image" src={animation} alt="animation"/></a>
            <a href="https://brahmaraj.github.io/gif_assignment/"><img className="project_image" src={gif_loader} alt="gif"/></a>
            <a href="https://brahmaraj.github.io/responsive/"><img className="project_image" src={responsive_website} alt="responsive website"/></a>
            <a href="https://brahmaraj.github.io/digital_clock/"><img className="project_image" src={digital_clock} alt="digital clock"/></a>
            <a href="https://brahmaraj.github.io/todo_app_js/"><img className="project_image" src={todo_app} alt="todo App"/></a>
            <a href="https://brahmaraj-rathod-assignment5-react.netlify.app"><img className="project_image" src={student_management} alt="student management"/></a>
            <a href="https://brahmaraj-rathod-blog-project.netlify.app"><img className="project_image" src={blog_project} alt="blog project"/></a>
        </div>
        </div>
    )
}

export default Portfolio;