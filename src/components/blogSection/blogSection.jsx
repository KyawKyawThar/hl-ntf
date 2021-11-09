import { blogs } from '../blogs';
import { SectionStyled } from '../reuseComponent/layout';
import SectionMainTitle from '../reuseComponent/sectionMainTitle';
import { BlogSectionStyled } from './blogSection.styled';

const BlogSection = () => {
  return (
    <BlogSectionStyled>
      <SectionStyled>
        <div className='blog-text'>
          <SectionMainTitle
            name={'Our Top Blogs'}
            subtitle={'Popular Blogs'}
            para={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
            }
          />
        </div>

        <div className='blogs-content'>
          {blogs.map((blog) => {
            return (
              <div className='blogs' key={blog.id}>
                <div className='image'>
                  <img src={blog.image} alt='blog' />
                </div>
                <h6>{blog.title}</h6>

                <div className='users'>
                  <p>Creators : </p>
                  <p>{blog.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionStyled>
    </BlogSectionStyled>
  );
};

export default BlogSection;
