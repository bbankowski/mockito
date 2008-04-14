defineStructure(
"DescriptiveMessagesWhenTimesXVerificationFailsTest",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["java.util.LinkedList","cl"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.cause.TooLittleInvocations","cl"],["org.mockito.exceptions.cause.UndesiredInvocation","cl"],["org.mockito.exceptions.verification.TooLittleActualInvocations","cl"],["org.mockito.exceptions.verification.TooManyActualInvocations","cl"],["org.mockitousage.verification.DescriptiveMessagesWhenTimesXVerificationFailsTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Class","cl"],["java.lang.Exception","cl"],["java.lang.Object","cl"],["org.mockito.internal.progress.VerificationMode","it"],["junit.framework.Assert","cl"],["java.lang.String","cl"],["java.lang.Throwable","cl"]),methodTable([9,"setup",[],"me"],[0,"mock",[11],"st me"],[9,"shouldVerifyActualNumberOfInvocationsSmallerThanWanted",[],"me"],[1,"clear",[],"me"],[0,"verify",[13,14],"st me"],[0,"times",["int"],"st me"],[15,"fail",[],"st me"],[15,"assertEquals",[16,16],"st me"],[17,"getMessage",[],"me"],[15,"assertEquals",[13,13],"st me"],[17,"getCause",[],"me"],[13,"getClass",[],"me"],[9,"shouldVerifyActualNumberOfInvocationsLargerThanWanted",[],"me"]),localVariableTable(["e","shouldVerifyActualNumberOfInvocationsSmallerThanWanted()-e"],["expected","shouldVerifyActualNumberOfInvocationsSmallerThanWanted()-expected"],["expectedCause","shouldVerifyActualNumberOfInvocationsSmallerThanWanted()-expectedCause"],["e","shouldVerifyActualNumberOfInvocationsLargerThanWanted()-e"],["expected","shouldVerifyActualNumberOfInvocationsLargerThanWanted()-expected"],["expectedCause","shouldVerifyActualNumberOfInvocationsLargerThanWanted()-expectedCause"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.verification;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," java.util.",T(1),";",nl,nl,ip," org.junit.",T(2),";",nl,ip," org.junit.",T(3),";",nl,ip," org.mockito.",T(0),";",nl,ip," org.mockito.",T(4),";",nl,ip," org.mockito.exceptions.cause.",T(5),";",nl,ip," org.mockito.exceptions.cause.",T(6),";",nl,ip," org.mockito.exceptions.verification.",T(7),";",nl,ip," org.mockito.exceptions.verification.",T(8),";",nl,nl,C(9,[],$("@",T(10),P(L("\"unchecked\"")),nl,pu,_,c,_,I("DescriptiveMessagesWhenTimesXVerificationFailsTest"),_,ex,_,T(4),_,B(nl,nl,w(4),F(pi,_,T(1),_,I("mock"),";"),nl,nl,w(4),M(0,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(9,"fi","mock")," = ",T(0),".",N(1),P(T(1),".",c),";",nl,w(4)))),nl,nl,w(4),M(2,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldVerifyActualNumberOfInvocationsSmallerThanWanted"),P(),_,ts,_,T(12),_,B(nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,nl,w(8),T(0),".",N(4),P(G(9,"fi","mock"),", ",N(5),P(L("3"))),".",N(3),P(),";",nl,w(8),tr,_,B(nl,w(12),T(0),".",N(4),P(G(9,"fi","mock"),", ",N(5),P(L("100"))),".",N(3),P(),";",nl,w(12),N(6),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(7),_,I("e")))),_,B(nl,w(12),V(1,$(T(16),_,I("expected")," =",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"linkedList.clear();\" +",nl,w(16),"\"\\n\" +",nl,w(16),"\"Wanted 100 times but was 3\""),";")),nl,w(12),N(7),P(W(1),", ",W(0),".",N(8),P()),";",nl,nl,w(12),N(9),P(T(5),".",c,", ",W(0),".",N(10),P(),".",N(11),P()),";",nl,nl,w(12),V(2,$(T(16),_,I("expectedCause")," =",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"Too little invocations:\""),";")),nl,w(12),N(7),P(W(2),", ",W(0),".",N(10),P(),".",N(8),P()),";",nl,w(8)),nl,w(4)))),nl,nl,w(4),M(12,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldVerifyActualNumberOfInvocationsLargerThanWanted"),P(),_,ts,_,T(12),_,B(nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,w(8),G(9,"fi","mock"),".",N(3),P(),";",nl,nl,w(8),T(0),".",N(4),P(G(9,"fi","mock"),", ",N(5),P(L("4"))),".",N(3),P(),";",nl,w(8),tr,_,B(nl,w(12),T(0),".",N(4),P(G(9,"fi","mock"),", ",N(5),P(L("1"))),".",N(3),P(),";",nl,w(12),N(6),P(),";",nl,w(8)),_,ct,_,P(V(3,$(T(8),_,I("e")))),_,B(nl,w(12),V(4,$(T(16),_,I("expected")," =",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"linkedList.clear();\" +",nl,w(16),"\"\\n\" +",nl,w(16),"\"Wanted 1 time but was 4\""),";")),nl,w(12),N(7),P(W(4),", ",W(3),".",N(8),P()),";",nl,nl,w(12),N(9),P(T(6),".",c,", ",W(3),".",N(10),P(),".",N(11),P()),";",nl,nl,w(12),V(5,$(T(16),_,I("expectedCause")," =",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"Undesired invocation:\""),";")),nl,nl,w(12),N(7),P(W(5),", ",W(3),".",N(10),P(),".",N(8),P()),";",nl,w(8)),nl,w(4)))),nl))));}});