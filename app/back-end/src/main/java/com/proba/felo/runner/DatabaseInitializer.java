package com.proba.felo.runner;


import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.Tag;
import com.proba.felo.model.entity.User;
import com.proba.felo.security.WebSecurityConfig;
import com.proba.felo.service.ArticleService;
import com.proba.felo.service.TagService;
import com.proba.felo.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "teszt1a@mail.com", WebSecurityConfig.ADMIN),
            new User("user", "user", "User", "teszt2@mail.com", WebSecurityConfig.USER)
    );
    private static final String ARTICLES_STR =
            """
                    9781603090773;Any Empire;Lorem ipsum blah blah blah
                    9781603090698;August Moon;Lorem ipsum blah blah blah
                    9781891830372;The Barefoot Serpent (softcover) by Scott Morse;Lorem ipsum blah blah blah
                    9781603090292;BB Wolf and the 3 LP's;Lorem ipsum blah blah blah
                    9781891830402;Beach Safari by Mawil;Lorem ipsum blah blah blah
                    9781603094429;Belzebubs;Lorem ipsum blah blah blah
                    9781891830563;Bighead by Jeffrey Brown;Lorem ipsum blah blah blah
                    9781603094320;Bodycount;Lorem ipsum blah blah blah
                    9781891830198;Box Office Poison;Lorem ipsum blah blah blah
                    9780958578349;From Hell;Lorem ipsum blah blah blah
                    9781603094221;Cat'n'Bat;Lorem ipsum blah blah blah
                    9781603091008;Crater XV;Lorem ipsum blah blah blah
                    9781891830815;Cry Yourself to Sleep by Jeremy Tinder;Lorem ipsum blah blah blah
                    9781603092715;Dear Beloved Stranger;Lorem ipsum blah blah blah
                    9781891830129;Dear Julia;Lorem ipsum blah blah blah
                    9781891830921;Death by Chocolate - Redux;Lorem ipsum blah blah blah
                    9781603090575;Dragon Puncher (Article 1);Lorem ipsum blah blah blah
                    9781603090858;Dragon Puncher (Article 2): Island;Lorem ipsum blah blah blah
                    9781603093873;Eddie Campbell's Omnibox: The Complete ALEC and BACCHUS (3 Volume Slipcase);Lorem ipsum blah blah blah
                    9781603090360;Far Arden;Lorem ipsum blah blah blah
                    9781603090537;Fingerprints;Lorem ipsum blah blah blah
                    9781891830976;Fox Bunny Funny;Lorem ipsum blah blah blah
                    9780958578349;From Hell;Lorem ipsum blah blah blah
                    9781603093866;God Is Disappointed / Apocrypha Now — SLIPCASE SET;Lorem ipsum blah blah blah
                    9781603090988;God Is Disappointed in You;Lorem ipsum blah blah blah
                    9781603090087;Hieronymus B.;Lorem ipsum blah blah blah
                    9781603094412;Highwayman;Lorem ipsum blah blah blah
                    9781891830174;Hutch Owen (Vol 1): The Collected by Tom Hart;Lorem ipsum blah blah blah
                    9781891830556;Hutch Owen (Vol 2): Unmarketable by Tom Hart;Lorem ipsum blah blah blah
                    9781603090865;Hutch Owen (Vol 3): Let's Get Furious!;Lorem ipsum blah blah blah
                    9781891830839;Infinite Kung Fu;Lorem ipsum blah blah blah
                    9781891830655;The King by Rich Koslowski;Lorem ipsum blah blah blah
                    9781603090001;The League of Extraordinary Gentlemen (Vol III): Century #1 - 1910;Lorem ipsum blah blah blah
                    9781603090063;The League of Extraordinary Gentlemen (Vol III): Century #2 - 1969;Lorem ipsum blah blah blah
                    9781603090070;The League of Extraordinary Gentlemen (Vol III): Century #3 - 2009;Lorem ipsum blah blah blah
                    9781603094375;The League of Extraordinary Gentlemen (Vol III): Century;Lorem ipsum blah blah blah
                    9781891830518;Less Than Heroes by David Yurkovich;Lorem ipsum blah blah blah
                    9781603090704;Liar's Kiss;Lorem ipsum blah blah blah
                    9781891830693;Lone Racer by Nicolas Mahler;Lorem ipsum blah blah blah
                    9781603091527;The Lovely Horrible Stuff;Lorem ipsum blah blah blah
                    9781603090094;Lower Regions;Lorem ipsum blah blah blah
                    9781891830334;Magic Boy and the Robot Elf by James Kochalka;Lorem ipsum blah blah blah
                    9781891830365;Monkey Vs. Robot (Vol 2): Crystal of Power by Koch.;Lorem ipsum blah blah blah
                    9781603090759;Monster on the Hill (Article 1);Lorem ipsum blah blah blah
                    9781891830686;Mosquito by Dan James;Lorem ipsum blah blah blah
                    9781603090490;Moving Pictures;Lorem ipsum blah blah blah
                    9781603094092;Nate Powell's OMNIBOX;Lorem ipsum blah blah blah
                    9781603090681;Okie Dokie Donuts (Story 1): Open for Business!;Lorem ipsum blah blah blah
                    9781891830297;Pinky & Stinky by James Kochalka;Lorem ipsum blah blah blah
                    9781603090711;Pirate Penguin vs Ninja Chicken (Article 1): Troublems with Frenemies;Lorem ipsum blah blah blah
                    9781603093675;Pirate Penguin vs Ninja Chicken (Article 2): Escape from Skull-Fragment Island!;Lorem ipsum blah blah blah
                    9781603094139;Return of the Dapper Men (Deluxe Edition);Lorem ipsum blah blah blah
                    9781603090896;Scene But Not Heard;Lorem ipsum blah blah blah
                    9781603094450;A Shining Beacon;Lorem ipsum blah blah blah
                    9781891830143;Speechless;Lorem ipsum blah blah blah
                    9781891830501;Spiral-Bound by Aaron Renier;Lorem ipsum blah blah blah
                    9781603090209;Sulk (Vol 1): Bighead and Friends;Lorem ipsum blah blah blah
                    9781603090315;Sulk (Vol 2): Deadly Awesome;Lorem ipsum blah blah blah
                    9781603090551;Sulk (Vol 3): The Kind of Strength...;Lorem ipsum blah blah blah
                    9781891830969;Super Spy;Lorem ipsum blah blah blah
                    9781603090438;Super Spy (Vol 2): The Lost Dossiers;Lorem ipsum blah blah blah
                    9781603090339;Swallow Me Whole;Lorem ipsum blah blah blah
                    9781603090056;That Salty Air;Lorem ipsum blah blah blah
                    9781603094504;They Called Us Enemy;Lorem ipsum blah blah blah
                    9781891830310;Three Fingers by Rich Koslowski;Lorem ipsum blah blah blah
                    9781891830983;Too Cool to Be Forgotten;Lorem ipsum blah blah blah
                    9781603090742;The Underwater Welder;Lorem ipsum blah blah blah
                    9781603090889;Upside Down (Article 1): A Vampire Tale;Lorem ipsum blah blah blah
                    9781603093712;Upside Down (Article 2): A Hat Full of Spells;Lorem ipsum blah blah blah
                    9781891830723;Will You Still Love Me If I Wet the Bed by Liz Prince;Lorem ipsum blah blah blah
                    9781603094405;Ye;Lorem ipsum blah blah blah
                    """;
    private final UserService userService;
    private final TagService tagService;
    private final ArticleService articleService;

    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        List<Tag> tags = tagService.getTags();
        USERS.get(0).setInterestedTags(
                new HashSet<>(Arrays.asList(tagService.getTagById(1), tagService.getTagById(2))));
        USERS.get(1).setInterestedTags(
                new HashSet<>(Arrays.asList(tagService.getTagById(3), tagService.getTagById(4), tagService.getTagById(2))));
        USERS.forEach(userService::saveUser);
        // getArticles().forEach(articleService::saveArticle);
        Optional<User> u = userService.getUserByUsername("admin");
        log.info("Database initialized");


        //for testing
        Set<Article> u1articles = userService.getRelevantArticles(u.get());
        //Set<Article> u2articles = userService.getRelevantArticles(userService.getUserByUsername("user").get());
        //u2articles.isEmpty();
    }

    private List<Article> getArticles() {
        return Arrays.stream(ARTICLES_STR.split("\n"))
                .map(articleInfoStr -> articleInfoStr.split(";"))
                .map(articleInfoArr -> new Article(1,"test", "test.txt", new Date(), null, null))
                .collect(Collectors.toList());
    }
}
