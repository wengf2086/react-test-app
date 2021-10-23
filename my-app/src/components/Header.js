import PropTypes from 'prop-types'
import Button from './Button' 

 const Header = ({ title }) => {
     const onClick = () => {
         console.log('Clicky')
     }
     return (
         <header className = 'header'>
            <h1 style = {headingStyle}>{title}</h1>
            <Button color = 'green' text = 'Hello' onClick = {onClick}/>
         </header>
     )
 }

 Header.defaultProps = {
     title: 'no title',
 }

 Header.propTypes = {
     title: PropTypes.string.isRequired,
 }
 const headingStyle = {
     color: 'purple', 
     backgroundColor: 'black'
 }
 
 export default Header
 