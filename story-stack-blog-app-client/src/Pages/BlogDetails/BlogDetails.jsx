import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`)
        setBlog(response.data.blog)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center"><img src="https://i.ibb.co.com/zVFWbD7P/03-19-26-213-512.gif" alt="Loading" className="w-[100px]" /></div>
  }



  console.log(blog)
  console.log("Single blog id", id)

  return (
    <section className="container m-auto py-20 px-4 lg:px-0">
      <div>
        <h2 className='text-3xl font-bold mb-4'>{blog?.title}</h2>
        <div className='flex items-center mb-4'>
          <img src={blog?.author?.image} alt="" className='w-10 h-10 rounded-full mr-3' />
          <div>
            <p className='text-lg font-medium'>{blog?.author?.name}</p>
            <p className='text-gray-500'>{new Date(blog?.createdAt).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}</p>
          </div>

        </div>
        <img src={blog?.image} alt="" className='w-full md:h-[580px] rounded-md object-cover mb-4' />
        <div className='space-y-4'>
          <p>{blog?.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusamus quibusdam amet. Temporibus id voluptatibus totam eos quasi esse perferendis perspiciatis exercitationem accusantium laborum suscipit, necessitatibus asperiores consequuntur quas inventore labore incidunt aspernatur porro doloremque distinctio dignissimos. Beatae, nisi aspernatur illum minus unde deserunt ipsum? Explicabo esse, a adipisci repellendus eligendi officia, laudantium eveniet rerum ullam consequuntur sunt dolorum! Vitae, laborum, nam sint aut rerum magni corporis quaerat unde voluptates ipsa consequuntur dolorum blanditiis in, sapiente eveniet est? Fugit, ipsum numquam! Alias, quaerat error expedita numquam laborum consectetur quasi et dolor reiciendis obcaecati quis, nihil quia debitis? <br /> <br />
          Iure mollitia ex earum consectetur adipisci perspiciatis expedita itaque quam, voluptate quod dolore illo id velit? Impedit iusto, itaque quam molestias porro nisi maxime fugiat culpa, pariatur, inventore quas ut at amet modi labore earum aliquam! Perferendis autem, blanditiis, id porro quidem vel laudantium esse minus perspiciatis cupiditate ut vitae totam officiis magnam soluta nesciunt! Natus similique magni odit ipsam quasi, exercitationem, magnam voluptate eveniet laboriosam pariatur quos illum animi unde commodi ex officia harum alias ad? Corporis minima, laborum commodi neque, reiciendis recusandae dolor ipsam modi quis officia magnam impedit totam a nostrum molestiae debitis est explicabo accusamus eius excepturi sequi illum. Ullam facere odit velit similique placeat maiores optio cumque culpa, <br /> 
          quam perferendis totam voluptatum, natus suscipit, doloribus sequi id illo. Eius necessitatibus officia reiciendis at sapiente perspiciatis eveniet saepe quae, recusandae consequuntur illo repellat dicta tempore quo? Fugiat illum, consequatur culpa enim perspiciatis, id, ipsam optio quis eos accusantium animi. Culpa hic recusandae, maxime quaerat debitis aliquam eos accusamus id, laudantium ipsa in officiis dignissimos incidunt consectetur illum sed officia, aliquid vel. Exercitationem nihil mollitia quas eligendi, porro aliquam et distinctio, tempore iure, aliquid assumenda temporibus. Voluptates laborum minus voluptas nesciunt voluptate ex reprehenderit ipsa ut beatae. Neque quisquam maiores debitis sequi, dolor hic, accusantium nihil similique excepturi porro itaque, non expedita ducimus consequatur? Adipisci, <br /> <br /> 
          qui delectus quaerat mollitia incidunt iusto, quis nisi, neque voluptate veritatis velit? Rerum odio saepe ipsam culpa neque iure deleniti voluptate nisi modi harum dicta distinctio deserunt laudantium animi perspiciatis corrupti, eum facere! Ab facere soluta ratione aspernatur voluptates nisi in fugiat dolor, hic laborum quos illum libero labore omnis quaerat reiciendis repellendus, iste odit ipsa minima repudiandae quod nihil voluptas sit! Quis labore blanditiis fuga voluptatibus laudantium fugiat rerum facere dolores laboriosam exercitationem porro vero, dolorum debitis ad ex? Similique vero saepe aspernatur, accusantium nihil molestias rerum neque eligendi explicabo aliquam praesentium esse sed, quidem repellendus optio doloremque voluptatibus hic soluta maxime pariatur. Animi aperiam corrupti sint magnam dolor eum modi nostrum labore autem culpa, <br /> <br /> 
          deserunt officia. Deleniti, mollitia, qui dolores corrupti laborum illum tempora blanditiis autem reiciendis natus, in necessitatibus iusto? Explicabo ad nisi repudiandae aperiam reprehenderit voluptatum eligendi sed cum facere officiis. Optio adipisci, ducimus perferendis, culpa aperiam, nisi voluptas delectus pariatur a vel rerum commodi! Sunt, nostrum natus expedita cupiditate placeat quis ad porro eum est, eius dicta quidem assumenda quod. Cumque blanditiis veniam recusandae voluptatibus commodi error aliquam quis, a voluptas rerum similique perferendis. Corrupti, nisi ducimus voluptates voluptas aspernatur ipsam nemo beatae laborum distinctio rem. Distinctio alias nisi pariatur reiciendis quod magnam, debitis dolore voluptas praesentium? Nobis voluptates, blanditiis necessitatibus possimus maxime non dolorem reiciendis accusamus excepturi alias esse illo unde architecto, <br /> 
          cumque doloribus facere repudiandae quod culpa recusandae quaerat impedit sint similique molestiae provident. Doloribus libero culpa veniam labore laboriosam, voluptate sint cum quae iusto est eveniet repellendus itaque natus. Maiores perspiciatis ipsa, dolore pariatur obcaecati omnis deserunt. Rerum, ducimus aliquam dignissimos similique sunt porro voluptas qui esse reiciendis nesciunt suscipit repellendus nisi est quisquam quae voluptatem, atque ea laudantium. Voluptas temporibus assumenda fugiat mollitia? Nemo iusto tenetur debitis deserunt nulla, dicta quas eaque provident quia molestiae assumenda tempora voluptatibus magnam impedit asperiores vel architecto saepe consectetur sit. Modi iusto mollitia officia illum labore commodi molestias architecto, eaque debitis cupiditate. Ipsam omnis eaque, quos inventore itaque magnam quo quae! Hic eligendi explicabo nemo sapiente eius quo neque ut, <br /> <br /> 
          sed, porro vel quia necessitatibus adipisci reiciendis assumenda sunt. Quae est beatae saepe recusandae maiores omnis accusamus fugiat, reiciendis, minus nam nemo dolorem porro unde dignissimos cumque! Nisi fugit accusantium molestiae eveniet corrupti nesciunt inventore doloremque, nobis esse ex eligendi. Repellendus nostrum corrupti doloremque facere non voluptas nemo, excepturi sapiente unde error quidem perspiciatis, ea voluptatem architecto maiores, eum laboriosam odio. Aspernatur alias quasi sed. Quas obcaecati facere dolore optio reprehenderit sequi harum, facilis pariatur dignissimos voluptas in sapiente culpa inventore dolor ipsa corrupti est quod odio voluptatum ipsum modi? Magnam ducimus quis unde quos explicabo? Facere, cumque quo, accusantium sint quasi eaque at earum corporis quas tenetur deserunt dolor nulla aspernatur, repellat maxime. Laudantium, esse cupiditate. Cumque praesentium aspernatur dolorem consectetur, <br /> <br /> 
          expedita deserunt ipsam. Quas pariatur ipsum eveniet delectus accusamus mollitia voluptates, eaque dicta. Aut voluptatibus soluta sed minima!</p>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails
