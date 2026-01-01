import 'package:flutter/material.dart';
import 'books.dart';
import 'home.dart';
// import 'package:pretty_animated_buttons/pretty_animated_buttons.dart';


class AboutMe extends StatelessWidget {
  const AboutMe({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        backgroundColor: Colors.transparent,
        toolbarHeight: 150,
        flexibleSpace: Padding(
          padding: const EdgeInsets.only(top: 40),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              InkWell(
                onTap: () {
                  print('Home clicked');
                },
                borderRadius: BorderRadius.circular(8),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Image.asset(
                      'assets/images/music.gif',
                      width: 80,
                      height: 80,
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Music',
                      style: TextStyle(fontSize: 18, fontFamily: "Playfair"),
                    ),
                  ],
                ),
              ),

              const SizedBox(width: 80),
              InkWell(
                onTap: () {
                  print('Home clicked');
                },
                borderRadius: BorderRadius.circular(8),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Image.asset(
                      'assets/images/contact.png',
                      width: 80,
                      height: 80,
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Contact Me',
                      style: TextStyle(fontSize: 18, fontFamily: "Playfair"),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 80),
              InkWell(
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) => Books(),));
                },
                borderRadius: BorderRadius.circular(8),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Image.asset(
                      'assets/images/books.gif',
                      width: 80,
                      height: 80,
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Books',
                      style: TextStyle(fontSize: 18, fontFamily: "Playfair"),
                    ),
                  ],
                ),
              ),

            ],
          ),
        ),
      ),
      body: SizedBox(
        width: size.width,
        height: size.height,
        child: Container(
          decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage("images/background.gif"),
              fit: BoxFit.cover,
            ),
          ),
          child: SizedBox(
            height: size.height,
            child: Align(
              alignment: Alignment.topCenter,
              child: FittedBox(
                fit: BoxFit.scaleDown,
                child: Column(
                  children: [
                    const SizedBox(height: 400),

                    Container(
                      width: 200,
                      height: 200,
                      decoration: BoxDecoration(
                        boxShadow: const [
                          BoxShadow(
                            color: Colors.white,
                            blurRadius: 12,
                            spreadRadius: 12,
                          ),
                        ],
                        borderRadius: BorderRadius.circular(100),
                        image: const DecorationImage(
                          image: AssetImage("images/pfp.png"),
                          fit: BoxFit.fill,
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),

                    Container(
                      width: 600,
                      padding: const EdgeInsets.all(20),
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          Container(
                            width: 550,
                            height: 340,
                            decoration: BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage("images/paper.jpg"),
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                          Container(
                            width: double.infinity,
                            height: 350,
                            decoration: BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage("images/frame2.png"),
                                fit: BoxFit.fill,
                              ),
                            ),
                          ),
                          // Text on top
                          SizedBox(
                            width: 560,
                            child: RichText(
                              textAlign: TextAlign.center,
                              text: const TextSpan(
                                style: TextStyle(
                                  fontSize: 22,
                                  color: Colors.black,
                                  fontFamily: "Playfair",
                                ),
                                children: [
                                  TextSpan(
                                    text: 'Hello!   ',
                                    style: TextStyle(
                                      fontFamily: 'Fancy',
                                      fontSize: 26,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  TextSpan(
                                    text:
                                        'I am Sam :) Music lover.\n'
                                        'Always learning, and Always exploring,\n'
                                        'I believe every moment is a story waiting to be told.\n\n'
                                        'I study Informatics and Software Engineering, I also enjoy studying Cybersecurity.\n\n'
                                        'My favorite programming languages are Python, Dart, and JavaScript.',
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
