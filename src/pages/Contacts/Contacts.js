/**
 * Created by ansarimofid on 24/08/17.
 */
import React from 'react'

import './Contacts.css'

function getThankUrl(url) {
  let urlArr = url.split("/");
  urlArr = urlArr.filter((data)=>{return data!=undefined && data!=""});
  return urlArr[0]+"//"+urlArr[1]+"/thanks";
}

const Contacts = ()=>(
  <div className="uk-container contacts uk-text-left uk-margin-large-top uk-margin-large-bottom">
      <div is uk-grid>
          <div className="uk-width-1-6@s uk-width-1-6@m"></div>
          <div className="uk-width-2-3@s uk-width-2-3@m">
              <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">Contacts</h2>

              {/*Contacts*/}
              <section className="uk-margin-large-top">
                  <div className="mail-phone uk-flex uk-flex-wrap">
                      <div className="mail uk-margin-medium-right">
                          <span className="uk-text-uppercase color-primary text-medium">Email:</span>
                          <a className="color-grey-54" href="mailto:ansarimofid@gmail.com?Subject=Hello" target="_top"> ansarimofid@gmail.com</a>
                      </div>
                      <div className="phone uk-margin-medium-right">
                          <span className="uk-text-uppercase color-primary text-medium">Phone:</span><span className="color-grey-54"> +91 9554597890</span>
                      </div>
                  </div>
              </section>

            {/*Social Links*/}
              <section className="social uk-margin-large-top">
                  <h4 className="title-deco">Social Links</h4>
                  <div className="social-list">
                      <div className="row-1 uk-flex uk-flex-wrap">
                          <div className="social-item uk-margin-large-right">
                              <span class="icon uk-margin-small-right" is uk-icon="icon:behance"></span>
                              <a href="https://www.behance.net/ansarimofid"  target="blank">/ansarimofid</a>
                          </div>

                          <div className="social-item">
                              <span class="icon uk-margin-small-right" is uk-icon="icon:dribbble"></span>
                              <a href="https://dribbble.com/ansarimofid"  target="blank">/ansarimofid</a>
                          </div>
                      </div>

                      <div className="row-2 uk-flex uk-flex-wrap uk-margin-small-top">
                          <div className="social-item uk-margin-large-right">
                              <span class="icon uk-margin-small-right" is uk-icon="icon:linkedin"></span>
                              <a href="https://www.linkedin.com/in/ansarimofid/"  target="blank">/ansarimofid</a>
                          </div>

                          <div className="social-item">
                              <span class="icon uk-margin-small-right" is uk-icon="icon:twitter"></span>
                              <a href="https://twitter.com/ansarimofid_"  target="blank">/ansarimofid_</a>
                          </div>
                      </div>
                  </div>
              </section>


            {/*Contact Form*/}
              <section className="contact-form uk-margin-large-top">
                  <h4 className="title-deco">Write to me</h4>
                  <div className="form-container">
                      <form method="POST" action="http://formspree.io/ansarimofid@gmail.com">
                          <fieldset className="uk-fieldset">
                              <div className="uk-margin">
                                  <input className="uk-input text-size-14" name="name" type="text" placeholder="YOUR NAME"/>
                              </div>

                              <div className="uk-margin">
                                  <input className="uk-input text-size-14" name="email" type="email" placeholder="YOUR EMAIL"/>
                              </div>


                              <div className="uk-margin">
                                  <textarea className="uk-textarea text-size-14" name="query" rows="5" placeholder="YOUR QUERY"></textarea>
                              </div>
                              <input type="hidden" name="_subject" value="Query From ansarimofid.in!" />
                              <input type="hidden" name="_format" value="plain" />

                              <input type="hidden" name="_next" value={getThankUrl(window.location.href)} />
                              <div className="uk-margin">
                                  <input type="submit" className="submit-btn uk-button" value="SEND"/>
                              </div>
                          </fieldset>
                      </form>
                  </div>
              </section>
          </div>
      </div>
  </div>
);

export default Contacts
