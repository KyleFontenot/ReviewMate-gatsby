import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
import Block from "../../components/Block"
import Card from "../../components/Card"

const ProductsPage = () => {

	return (
		<Layout slug="Products">
			{/*<h1>Product Categories</h1>*/}

		<Hero bgimgUniqueName="analyzing-graph-growth.jpg" maxHeight="15rem" blurred>
			<div className="hero__text hero__text--minimal" style={{ backgroundColor: "rgba(0,0,0,0)", color: "white", minWidth: "70%",
		boxShadow: "none" }}>
				<h1 style={{color: "white"}}>Capabilities</h1>
			</div>
		</Hero>
		<p style={{margin:"2rem auto", paddingRight:'2rem', paddingLeft:'2rem', textIndent:"2rem", maxWidth: "60rem"}}>
			Tackle any audit task at any level. ReviewMate covers every role from coder to manager. "Modules" are parts of the software meant for typical use cases which can scale to match your needs. See how many of these tools within ReviewMate mutually benefit one another being in a consolidated service.
		</p>
		<Block justify="center" style={{backgroundColor: '#444'}}>
		<Link to="/products/auditingtools/"
		style={{textDecoration: "none", marginLeft:'1.5rem', marginRight:'1.5rem'}}
		>
			<Card margin="1.5rem" shadow style={{width:'100%'}}>
				<h2>Auditing Tools →</h2>
				<h4>Gather data</h4>
				<ul>
					<li>CMS-HCC (Risk Adjustment)</li>
					<li>Profee (Physician's Office)</li>
					<li>ASC (Ambulatory Surgery Center)</li>
					<li>OPPS (Outpatient Software)</li>
					<li>IPPS (Inpatient Software)</li>
				</ul>
			</Card>
		</Link>
		<Link to="/products/auditingsolutions/"
		style={{textDecoration: "none", marginLeft:'1.5rem', marginRight:'1.5rem'}}
		>
			<Card margin="1.5rem" shadow>
				<h2>Auditing Solutions →</h2>
				<h4>Refine data</h4>
				<ul>
					<li>Integration Manager</li>
					<li>Sample Selector & Randomizer</li>
					<li>Risk Manager</li>
				</ul>
			</Card>
		</Link>
		<Link to="/products/auditingmanagement/" style={{textDecoration: "none", marginLeft:'1.5rem', marginRight:'1.5rem'}} >
			<Card margin="1.5rem" shadow>
				<h2>Auditing Management →</h2>
				<h4>Use data</h4>
				<ul>
					<li>Time Management</li>
					<li>CMS-HCC Analyzer</li>
					<li>Change Tracker</li>
					<li>Workflow Analytics</li>
				</ul>
			</Card>
		</Link>
		</Block>
		</Layout>
	)
}
export default ProductsPage;
