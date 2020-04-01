import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{

    constructor(){
        super();
        this.state={
            sections:[
                {
                    id:1,
                    title:'Investment',
                    imageURL:'https://icdn.isrgrajan.com/in/2019/05/CR-Money-Inlinehero-pick-investment-companny-0818-1024x576.jpg',
                    subtitle:'Investment Tracking',
                    size:'large'
                },
                {
                    id:2,
                    title:'Earning',
                    imageURL:'https://miro.medium.com/max/1400/1*707HODHswO8-hE6X4aVzng.jpeg',
                    subtitle:'Earning Tracking',
                    size:'large'
                },
                {
                    id:3,
                    title:'Expense',
                    imageURL:'https://www.xero.com/content/xero/za/features-and-tools/accounting-software/expenses/_jcr_content/par/section_e497/section/column_control_ef26/item0/xvideo_76c5/image.adapt.815.high.png',
                    subtitle:'Expense Tracking',
                    size:'large'
                },
                {
                    id:4,
                    title:'Shares',
                    imageURL:'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/irctc_share_price_660_102419101548.jpg',
                    subtitle:'Investment Tracking',
                    size:'large'
                },
                {
                    id:5,
                    title:'Analytics',
                    imageURL:'https://www.websolutions.com/Customer-Content/www/CMS/files/analytics.png',
                    subtitle:'Investment Tracking',
                    size :'large'
                },
                {
                    id:6,
                    title:'Persons',
                    imageURL:'https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/05/Family-Quotes-1.jpg',
                    subtitle:'Person Manage',
                    size:'large'
                }
            ]}
        
    }

    render(){
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map(({id,subtitle,title,imageURL,size}) => (
                    <MenuItem key={id} title={title}  subtitle = {subtitle} imageURL={imageURL} size ={size}/>
                ))
            }
            </div>
        )
    }
}

export default Directory;