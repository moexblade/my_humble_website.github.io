import 'package:flutter/material.dart';
import 'package:pretty_animated_buttons/pretty_animated_buttons.dart';
import 'about_me.dart';

class Books extends StatelessWidget {
  const Books({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      body: Container(
        width: size.width,
        height: size.height,
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/background_books2.jpg"),
            fit: BoxFit.cover,
          ),
        ),
        child: SingleChildScrollView( // ✅ page controls scrolling
          physics: const ClampingScrollPhysics(),
          child: Column(
            children: [
              const SizedBox(height: 20),

              const Text(
                'Welcome to my humble library.',
                style: TextStyle(
                  fontSize: 38,
                  fontFamily: "Fancy",
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              ),

              const SizedBox(height: 16),

              Image.asset(
                "assets/images/library.jpg",
                height: 200,
                width: 200,
              ),

              const SizedBox(height: 36),

              SizedBox(
                width: 500,
                child: GridView.count(
                  shrinkWrap: true, // ✅ fixes height
                  physics: const NeverScrollableScrollPhysics(), // ✅ no nested scroll
                  crossAxisCount: 2,
                  mainAxisSpacing: 20,
                  crossAxisSpacing: 30,
                  childAspectRatio: 0.7,
                  children: const [
                    _BookItem("assets/images/books/metasploit.jpg"),
                    _BookItem("assets/images/books/vicious.jpg"),
                    _BookItem("assets/images/books/linux.jpg"),
                    _BookItem("assets/images/books/python_hack.jpg"),
                  ],
                ),
              ),

              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _BookItem extends StatelessWidget {
  final String image;
  const _BookItem(this.image);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        boxShadow: const [
          BoxShadow(color: Colors.black, spreadRadius: 3, blurRadius: 12),
        ],
        image: DecorationImage(
          image: AssetImage(image),
          fit: BoxFit.fill,
        ),
      ),
    );
  }
}
