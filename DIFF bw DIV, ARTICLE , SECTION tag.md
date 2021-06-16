# fayez
FULL STACK TASK
DIFF B/W DIV ARTICLE SECTION TAGS:-
If the content within the element is not semantically related, then use a <div>. 
If the semantically related content is also able to be self-contained, then use an <article>. 
Otherwise, use a <section>.


HTML <div> Tag:
 It is the non semantic elements and it tells nothing about its content.
The <div> tag defines a division or a section in an HTML document.

The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The <div> tag is easily styled by using the class or id attribute.

Any sort of content can be put inside the <div> tag! 
  
example:
  <html>
<head>
<style>
.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
</style>
</head>
<body>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>

</body>
</html>



HTML <article> Element:
 It is the semantic elements and it clearly defines its content.
 
The <article> element specifies independent, self-contained content.

An article should make sense on its own, and it should be possible to distribute it independently from the rest of the web site.

Examples of where an <article> element can be used:
 Forum post
 Blog post
 Newspaper article
  
example:
  <article>
<h2>FAYEZ</h2>
<p>blaaah blaah about him</p>
</article>

<article>
<h2>KALAM</h2>
<p>blaaah blaah about him</p>
</article>

<article>
<h2>KALAM</h2>
<p>blaaah blaah about him</p>
</article>
 
 

HTML <section> Element:
It is also the semantic elements and it clearly defines its content.

The <section> element defines a section in a document.

the section is a thematic grouping of content, typically with a heading.

A web page could normally be split into sections for introduction, content, and contact information.
  
 example:
  <section>
<h1>WWF</h1>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h1>WWF's Panda symbol</h1>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>

