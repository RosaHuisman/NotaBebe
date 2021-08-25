<>
<Header />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/forgot" component={ForgotPassword} />
  <Route exact path="/contact" component={ContactDetails} />
  {/* <Route path="*" component={Error} /> */}

  {/* Route Admin */}
  <PrivateRoute exact path="/admin" component={AdminMobileHome} />

  {/* Route Staff */}
  <PrivateRoute exact path="/staff/:id/" component={StaffProfile} />
  <PrivateRoute exact path="/staff/:id/comments" component={ReadComment} />
  <PrivateRoute exact path="/staff/:id/createrecap" component={CreateRecap} />

  {/* Route Parent Children */}
  <PrivateRoute exact path="/parent/:id" component={ParentProfile} />
  <PrivateRoute exact path="/parent/:id/child/:id" component={ChildProfile} />
  <PrivateRoute exact path="/parent/:id/child/:id/recap" component={Recap} />

  {/* Route de test blabla */}
  <PrivateRoute exact path="/homepage2" component={HomePage2} />
  <PrivateRoute exact path="/homepage2" component={HomePage2} />
  <PrivateRoute exact path="/homepage3" component={HomePage3} />
</Switch>
<Footer />
</>
