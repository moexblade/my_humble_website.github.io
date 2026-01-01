import 'package:flutter/material.dart';
import 'package:pretty_animated_buttons/pretty_animated_buttons.dart';
import 'about_me.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
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
          child: SingleChildScrollView(
            padding: EdgeInsets.zero,
            physics: const ClampingScrollPhysics(),
            child: SizedBox(
              height: size.height,
              child: Align(
                alignment: Alignment.topCenter,
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  child: Column(
                    children: [
                      const SizedBox(height: 400),

                      GestureDetector(
                        onTap: (){
                          Navigator.pop(context);
                        },
                        child: Container(
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
                      ),

                      const SizedBox(height: 20),

                      const Text(
                        'Hello, please feel free to explore my website.',
                        style: TextStyle(
                          fontSize: 38,
                          fontFamily: "Fancy",
                        ),
                        textAlign: TextAlign.center,
                      ),

                      const SizedBox(height: 16),

                      const Text(
                        'This is a very simple website built with Flutter.',
                        style: TextStyle(
                          fontSize: 16,
                          fontFamily: "Playfair",
                        ),
                        textAlign: TextAlign.center,
                      ),

                      const SizedBox(height: 24),

                      Image.asset(
                        "images/angels2.gif",
                        width: 200,
                        height: 100,
                      ),

                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Image.asset(
                            "assets/images/angels.gif",
                            width: 100,
                            height: 100,
                          ),
                          PrettyNeumorphicButton(
                            label: 'About Me',
                            labelStyle: const TextStyle(
                              fontSize: 16,
                              fontFamily: "Playfair",
                              color: Colors.black,
                            ),
                            onPressed: () {
                              Navigator.push(context, MaterialPageRoute(builder: (context) => AboutMe(),));
                            },
                            duration: const Duration(milliseconds: 50),
                          ),
                          Image.asset(
                            "assets/images/angels.gif",
                            width: 100,
                            height: 100,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
